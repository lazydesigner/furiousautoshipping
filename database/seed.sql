-- Seed data for Furious Auto Shipping Database

-- Insert default admin user
INSERT INTO users (email, name, password_hash, role) VALUES 
('admin@furiousautoshipping.com', 'Admin User', '$2b$10$placeholder_hash_replace_in_production', 'SUPER_ADMIN');

-- Insert application settings
INSERT INTO settings (key, value, description, category) VALUES 
('pricing_base_fee', '200', 'Base fee for auto transport', 'pricing'),
('pricing_per_mile', '1.10', 'Cost per mile for transport', 'pricing'),
('pricing_enclosed_multiplier', '1.4', 'Multiplier for enclosed transport', 'pricing'),
('pricing_expedited_fee', '300', 'Additional fee for expedited service', 'pricing'),
('pricing_non_running_fee', '200', 'Additional fee for non-running vehicles', 'pricing'),
('pricing_oversized_fee', '300', 'Additional fee for oversized vehicles', 'pricing'),
('terminal_discount', '100', 'Discount for terminal-to-terminal service', 'pricing'),
('max_vehicles_per_quote', '5', 'Maximum number of vehicles per quote', 'limits'),
('quote_validity_days', '7', 'Number of days a quote remains valid', 'business'),
('company_phone', '(555) 123-4567', 'Company phone number', 'contact'),
('company_email', 'info@furiousautoshipping.com', 'Company email address', 'contact'),
('support_email', 'support@furiousautoshipping.com', 'Support email address', 'contact'),
('quotes_email', 'quotes@furiousautoshipping.com', 'Quotes email address', 'contact');

-- Insert email templates
INSERT INTO email_templates (name, subject, html_content, text_content, variables) VALUES 
(
    'quote_confirmation',
    'Your Furious Auto Shipping Quote #{{tracking_id}}',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Quote Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #0ea5e9;">Thank You for Your Quote Request!</h1>
            <p>Hi {{customer_name}},</p>
            
            <p>Thank you for choosing Furious Auto Shipping! We''ve received your quote request and our team will review it shortly.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Quote Details</h3>
                <p><strong>Quote ID:</strong> {{tracking_id}}</p>
                <p><strong>From:</strong> {{origin_address}}</p>
                <p><strong>To:</strong> {{destination_address}}</p>
                <p><strong>Vehicle:</strong> {{vehicle_info}}</p>
                <p><strong>Estimated Cost:</strong> {{price_range}}</p>
            </div>
            
            <h3>What''s Next?</h3>
            <ol>
                <li>Our team will review your quote within 2-4 hours</li>
                <li>We''ll contact you to confirm details and provide final pricing</li>
                <li>Once confirmed, we''ll schedule your pickup</li>
            </ol>
            
            <p>Questions? Contact us at {{company_phone}} or {{company_email}}</p>
            
            <p>Best regards,<br>Furious Auto Shipping Team</p>
        </div>
    </body>
    </html>',
    'Thank you for your quote request #{{tracking_id}}!
    
    Hi {{customer_name}},
    
    We''ve received your auto transport quote request and will review it within 2-4 hours.
    
    Quote Details:
    - From: {{origin_address}}
    - To: {{destination_address}}
    - Vehicle: {{vehicle_info}}
    - Estimated Cost: {{price_range}}
    
    What''s Next:
    1. Our team will review your quote within 2-4 hours
    2. We''ll contact you to confirm details and provide final pricing
    3. Once confirmed, we''ll schedule your pickup
    
    Questions? Contact us at {{company_phone}} or {{company_email}}
    
    Best regards,
    Furious Auto Shipping Team',
    '["tracking_id", "customer_name", "origin_address", "destination_address", "vehicle_info", "price_range", "company_phone", "company_email"]'::jsonb
),
(
    'admin_notification',
    'New Quote Request #{{tracking_id}}',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Quote Request</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <h2 style="color: #92400e;">🚨 New Quote Request #{{tracking_id}}</h2>
                <p>Received: {{created_at}}</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {{customer_name}}</p>
                <p><strong>Email:</strong> {{customer_email}}</p>
                <p><strong>Phone:</strong> {{customer_phone}}</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Shipping Details</h3>
                <p><strong>From:</strong> {{origin_address}}</p>
                <p><strong>To:</strong> {{destination_address}}</p>
                <p><strong>Transport:</strong> {{transport_type}}</p>
                <p><strong>Service:</strong> {{pickup_type}}</p>
                <p><strong>Distance:</strong> {{distance}} miles</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Vehicle Information</h3>
                <p>{{vehicle_details}}</p>
            </div>
            
            <p><strong>Action Required:</strong> Please follow up with this customer within 2-4 hours.</p>
        </div>
    </body>
    </html>',
    'New Quote Request #{{tracking_id}}
    
    Customer: {{customer_name}}
    Email: {{customer_email}}
    Phone: {{customer_phone}}
    
    Route: {{origin_address}} to {{destination_address}}
    Distance: {{distance}} miles
    Transport: {{transport_type}}
    Service: {{pickup_type}}
    
    Vehicle: {{vehicle_details}}
    
    ACTION REQUIRED: Follow up within 2-4 hours.',
    '["tracking_id", "created_at", "customer_name", "customer_email", "customer_phone", "origin_address", "destination_address", "transport_type", "pickup_type", "distance", "vehicle_details"]'::jsonb
),
(
    'contact_confirmation',
    'Thank you for contacting Furious Auto Shipping',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Contact Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #0ea5e9;">Thank You for Contacting Us!</h1>
            <p>Hi {{customer_name}},</p>
            
            <p>We''ve received your message and will get back to you within 24 hours.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Your Message</h3>
                <p><strong>Subject:</strong> {{subject}}</p>
                <p><strong>Message:</strong> {{message}}</p>
            </div>
            
            <p>For urgent matters, please call us at {{company_phone}}</p>
            
            <p>Best regards,<br>Furious Auto Shipping Team</p>
        </div>
    </body>
    </html>',
    'Thank you for contacting Furious Auto Shipping!
    
    Hi {{customer_name}},
    
    We''ve received your message and will get back to you within 24 hours.
    
    Your Message:
    Subject: {{subject}}
    Message: {{message}}
    
    For urgent matters, please call us at {{company_phone}}
    
    Best regards,
    Furious Auto Shipping Team',
    '["customer_name", "subject", "message", "company_phone"]'::jsonb
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, published, published_at, category, tags, author_name, meta_title, meta_description) VALUES 
(
    'Complete Guide to Auto Transport: Everything You Need to Know',
    'complete-guide-auto-transport',
    'Planning to ship your car? This comprehensive guide covers everything from choosing the right service to preparing your vehicle for transport.',
    '<h2>Introduction to Auto Transport</h2>
    <p>Auto transport is the process of shipping vehicles from one location to another using specialized car carriers. Whether you''re relocating, buying a car online, or sending a vehicle to a family member, understanding the auto transport process can save you time, money, and stress.</p>
    
    <h2>Types of Auto Transport</h2>
    <h3>Open Transport</h3>
    <p>Open transport is the most common and economical option. Your vehicle is loaded onto an open trailer alongside other cars. While your car is exposed to the elements, this method is safe and reliable for most vehicles.</p>
    
    <h3>Enclosed Transport</h3>
    <p>Enclosed transport provides premium protection for luxury, classic, or high-value vehicles. Cars are shipped in covered trailers, protecting them from weather and road debris.</p>
    
    <h2>How to Choose a Transport Company</h2>
    <p>When selecting an auto transport company, consider these factors:</p>
    <ul>
    <li>DOT licensing and insurance coverage</li>
    <li>Customer reviews and ratings</li>
    <li>Transparent pricing with no hidden fees</li>
    <li>Experience with your type of vehicle</li>
    <li>Available pickup and delivery options</li>
    </ul>
    
    <h2>Preparing Your Vehicle</h2>
    <p>Before shipping your vehicle:</p>
    <ul>
    <li>Clean your car inside and out</li>
    <li>Remove all personal items</li>
    <li>Document existing damage with photos</li>
    <li>Ensure the fuel tank is 1/4 full or less</li>
    <li>Disable car alarms</li>
    </ul>
    
    <h2>What to Expect During Transport</h2>
    <p>Once your vehicle is picked up, you''ll receive tracking information and regular updates. Transit times vary by distance, typically ranging from 1-14 days depending on the route.</p>
    
    <h2>Conclusion</h2>
    <p>Auto transport doesn''t have to be complicated. By choosing a reputable company and properly preparing your vehicle, you can ensure a smooth shipping experience. Get quotes from multiple companies and don''t hesitate to ask questions about their process.</p>',
    true,
    CURRENT_TIMESTAMP,
    'Guides',
    ARRAY['Auto Transport', 'Car Shipping', 'Beginner Guide'],
    'Sarah Williams',
    'Complete Auto Transport Guide 2024 | Everything You Need to Know',
    'Comprehensive guide to auto transport covering types, preparation, choosing companies, and what to expect. Expert tips for successful car shipping.'
),
(
    'Open vs Enclosed Auto Transport: Which Should You Choose?',
    'open-vs-enclosed-auto-transport',
    'Deciding between open and enclosed transport? Learn the pros and cons of each option to make the best choice for your vehicle.',
    '<h2>Understanding Your Options</h2>
    <p>When shipping your vehicle, you''ll need to choose between open and enclosed transport. Each option has distinct advantages and considerations that make them suitable for different situations.</p>
    
    <h2>Open Transport</h2>
    <h3>Advantages</h3>
    <ul>
    <li>Most cost-effective option</li>
    <li>Widely available with frequent departures</li>
    <li>Faster booking and pickup times</li>
    <li>Same insurance coverage as enclosed transport</li>
    </ul>
    
    <h3>Considerations</h3>
    <ul>
    <li>Vehicle exposed to weather elements</li>
    <li>Potential exposure to road debris</li>
    <li>Less privacy during transport</li>
    </ul>
    
    <h2>Enclosed Transport</h2>
    <h3>Advantages</h3>
    <ul>
    <li>Complete protection from weather</li>
    <li>Protection from road debris and dust</li>
    <li>Ideal for luxury and classic vehicles</li>
    <li>Enhanced security and privacy</li>
    </ul>
    
    <h3>Considerations</h3>
    <ul>
    <li>Higher cost (typically 40-60% more)</li>
    <li>Limited availability and longer booking times</li>
    <li>Fewer carriers offering this service</li>
    </ul>
    
    <h2>Which Should You Choose?</h2>
    <p>Choose <strong>open transport</strong> if:</p>
    <ul>
    <li>You have a standard daily driver vehicle</li>
    <li>Cost is a primary concern</li>
    <li>You need flexible pickup times</li>
    <li>Your vehicle is used to outdoor exposure</li>
    </ul>
    
    <p>Choose <strong>enclosed transport</strong> if:</p>
    <ul>
    <li>You have a luxury, classic, or exotic vehicle</li>
    <li>Your vehicle has custom modifications</li>
    <li>You want maximum protection</li>
    <li>The vehicle has sentimental or high monetary value</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Both open and enclosed transport are safe, reliable options. Your choice should depend on your vehicle type, budget, and personal preferences. Remember that both options include comprehensive insurance coverage for your peace of mind.</p>',
    true,
    CURRENT_TIMESTAMP - INTERVAL '3 days',
    'Comparison',
    ARRAY['Open Transport', 'Enclosed Transport', 'Vehicle Safety'],
    'Mike Johnson',
    'Open vs Enclosed Auto Transport: Complete Comparison Guide',
    'Compare open and enclosed auto transport options. Learn which is best for your vehicle with pros, cons, and expert recommendations.'
);

-- Clean up old rate limit entries (older than 24 hours)
DELETE FROM rate_limits WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 hours';