-- Furious Auto Shipping Database Schema
-- PostgreSQL Database Creation Script

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing types if they exist (for reset scenarios)
DROP TYPE IF EXISTS transport_type CASCADE;
DROP TYPE IF EXISTS pickup_type CASCADE;
DROP TYPE IF EXISTS vehicle_condition CASCADE;
DROP TYPE IF EXISTS quote_status CASCADE;
DROP TYPE IF EXISTS user_role CASCADE;
DROP TYPE IF EXISTS contact_status CASCADE;
DROP TYPE IF EXISTS log_level CASCADE;

-- Create ENUM types
CREATE TYPE transport_type AS ENUM ('OPEN', 'ENCLOSED');
CREATE TYPE pickup_type AS ENUM ('DOOR_TO_DOOR', 'TERMINAL_TO_TERMINAL');
CREATE TYPE vehicle_condition AS ENUM ('RUNNING', 'NOT_RUNNING');
CREATE TYPE quote_status AS ENUM ('NEW', 'CONTACTED', 'IN_PROGRESS', 'QUOTED', 'BOOKED', 'CANCELLED', 'COMPLETED');
CREATE TYPE user_role AS ENUM ('USER', 'ADMIN', 'SUPER_ADMIN');
CREATE TYPE contact_status AS ENUM ('NEW', 'IN_PROGRESS', 'RESOLVED', 'SPAM');
CREATE TYPE log_level AS ENUM ('INFO', 'WARN', 'ERROR', 'DEBUG');

-- Drop existing tables if they exist (for reset scenarios)
DROP TABLE IF EXISTS rate_limits CASCADE;
DROP TABLE IF EXISTS system_logs CASCADE;
DROP TABLE IF EXISTS contact_forms CASCADE;
DROP TABLE IF EXISTS email_templates CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS vehicles CASCADE;
DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create function for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    password_hash VARCHAR(255),
    role user_role DEFAULT 'USER',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Quotes table
CREATE TABLE quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tracking_id VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Contact Information
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    promo_code VARCHAR(100),
    
    -- Shipping Details
    origin_address TEXT NOT NULL,
    destination_address TEXT NOT NULL,
    origin_city VARCHAR(255),
    origin_state VARCHAR(10),
    destination_city VARCHAR(255),
    destination_state VARCHAR(10),
    move_date DATE,
    flexible_dates BOOLEAN DEFAULT FALSE,
    
    -- Service Options
    transport_type transport_type DEFAULT 'OPEN',
    pickup_type pickup_type DEFAULT 'DOOR_TO_DOOR',
    expedited BOOLEAN DEFAULT FALSE,
    seasonal_service BOOLEAN DEFAULT FALSE,
    seasonal_start_date DATE,
    seasonal_return_date DATE,
    
    -- Pricing
    distance DECIMAL(8,2),
    base_cost DECIMAL(10,2),
    total_cost DECIMAL(10,2),
    cost_breakdown JSONB,
    
    -- Status & Tracking
    status quote_status DEFAULT 'NEW',
    notes TEXT,
    
    -- Admin fields
    assigned_to VARCHAR(255),
    follow_up_date DATE,
    converted BOOLEAN DEFAULT FALSE,
    conversion_date TIMESTAMP WITH TIME ZONE
);

-- Vehicles table
CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote_id UUID NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
    
    year INTEGER NOT NULL CHECK (year >= 1900 AND year <= EXTRACT(year FROM CURRENT_DATE) + 1),
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    condition vehicle_condition DEFAULT 'RUNNING',
    is_oversized BOOLEAN DEFAULT FALSE,
    special_instructions TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts table
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- SEO
    meta_title VARCHAR(500),
    meta_description VARCHAR(500),
    
    -- Categories and Tags
    category VARCHAR(100),
    tags TEXT[], -- Array of tags
    
    -- Author
    author_name VARCHAR(255),
    author_email VARCHAR(255),
    
    -- Featured image
    featured_image VARCHAR(500)
);

-- Contact Forms table
CREATE TABLE contact_forms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    status contact_status DEFAULT 'NEW',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Admin fields
    responded_at TIMESTAMP WITH TIME ZONE,
    responded_by VARCHAR(255),
    notes TEXT,
    
    -- Metadata
    ip_address INET,
    user_agent TEXT,
    referrer TEXT
);

-- System Logs table
CREATE TABLE system_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level log_level NOT NULL,
    message TEXT NOT NULL,
    data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Context
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    quote_id UUID REFERENCES quotes(id) ON DELETE SET NULL,
    ip_address INET,
    user_agent TEXT
);

-- Email Templates table
CREATE TABLE email_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    subject VARCHAR(500) NOT NULL,
    html_content TEXT NOT NULL,
    text_content TEXT,
    variables JSONB, -- Store available template variables
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Settings table for application configuration
CREATE TABLE settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key VARCHAR(255) UNIQUE NOT NULL,
    value JSONB NOT NULL,
    description TEXT,
    category VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Rate Limiting table
CREATE TABLE rate_limits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    identifier VARCHAR(255) NOT NULL, -- IP address or user ID
    endpoint VARCHAR(255) NOT NULL,
    requests INTEGER DEFAULT 1,
    window_start TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(identifier, endpoint, window_start)
);

-- Create indexes for better performance
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_quotes_created_at ON quotes(created_at);
CREATE INDEX idx_quotes_tracking_id ON quotes(tracking_id);
CREATE INDEX idx_quotes_email ON quotes(email);
CREATE INDEX idx_quotes_origin_state ON quotes(origin_state);
CREATE INDEX idx_quotes_destination_state ON quotes(destination_state);

CREATE INDEX idx_vehicles_quote_id ON vehicles(quote_id);
CREATE INDEX idx_vehicles_make_model ON vehicles(make, model);

CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);

CREATE INDEX idx_contact_forms_status ON contact_forms(status);
CREATE INDEX idx_contact_forms_created_at ON contact_forms(created_at);

CREATE INDEX idx_system_logs_level ON system_logs(level);
CREATE INDEX idx_system_logs_created_at ON system_logs(created_at);
CREATE INDEX idx_system_logs_quote_id ON system_logs(quote_id);

CREATE INDEX idx_rate_limits_identifier ON rate_limits(identifier);
CREATE INDEX idx_rate_limits_endpoint ON rate_limits(endpoint);
CREATE INDEX idx_rate_limits_window_start ON rate_limits(window_start);

-- Create triggers for updated_at columns
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_quotes_updated_at 
    BEFORE UPDATE ON quotes 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_email_templates_updated_at 
    BEFORE UPDATE ON email_templates 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_settings_updated_at 
    BEFORE UPDATE ON settings 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();