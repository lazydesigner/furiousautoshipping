'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Analytics() {
  // Initialize Google Analytics
  const initGA = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }

  // Initialize Meta Pixel
  const initMetaPixel = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }

  useEffect(() => {
    // Initialize analytics after component mounts
    initGA()
    initMetaPixel()
  }, [])

  return (
    <>
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  anonymize_ip: true,
                  send_page_view: false
                });
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel */}
      {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  )
}

// Analytics event tracking functions
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Specific tracking functions for the auto transport business
export const trackQuoteStarted = (data = {}) => {
  trackEvent('quote_started', {
    event_category: 'engagement',
    event_label: 'quote_form',
    ...data,
  })
}

export const trackQuoteCompleted = (data = {}) => {
  trackEvent('quote_completed', {
    event_category: 'conversion',
    event_label: 'quote_submitted',
    value: data.estimatedPrice || 0,
    currency: 'USD',
    ...data,
  })
}

export const trackPhoneCall = (source = 'header') => {
  trackEvent('phone_call', {
    event_category: 'engagement',
    event_label: source,
  })
}

export const trackEmailClick = (source = 'footer') => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: source,
  })
}

export const trackServiceView = (serviceName) => {
  trackEvent('view_service', {
    event_category: 'engagement',
    event_label: serviceName,
  })
}

export const trackBlogRead = (articleTitle) => {
  trackEvent('blog_read', {
    event_category: 'content',
    event_label: articleTitle,
  })
}