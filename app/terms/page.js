export const metadata = {
  title: 'Terms of Service | Furious Auto Shipping',
  description: 'Terms of service and conditions for using Furious Auto Shipping auto transport services.',
  keywords: 'terms of service, auto transport terms, car shipping conditions',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">1. Acceptance of Terms</h2>
              <p>
                By using Furious Auto Shipping's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">2. Service Description</h2>
              <p>
                Furious Auto Shipping provides auto transport brokerage services, connecting customers 
                with licensed and insured motor carriers for vehicle transportation across the United States.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>We act as a broker, not a carrier</li>
                <li>All transport is performed by licensed third-party carriers</li>
                <li>Services include open transport, enclosed transport, and expedited shipping</li>
                <li>Coverage includes all 50 states</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">3. Booking and Payment</h2>
              <h3 className="text-lg font-semibold mb-2">3.1 Quotes and Booking</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Quotes are estimates and subject to change based on final details</li>
                <li>Booking requires a deposit to secure carrier assignment</li>
                <li>Final pricing is confirmed upon carrier assignment</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-2">3.2 Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Deposit due at booking (typically $100-300)</li>
                <li>Balance due to carrier upon delivery</li>
                <li>Accepted payment methods: cash, certified check, money order</li>
                <li>No refunds after carrier assignment unless cancellation is due to our fault</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">4. Customer Responsibilities</h2>
              <h3 className="text-lg font-semibold mb-2">4.1 Vehicle Preparation</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Remove all personal items from the vehicle</li>
                <li>Ensure fuel level is 1/4 tank or less</li>
                <li>Disable car alarms</li>
                <li>Document existing damage with photos</li>
                <li>Ensure vehicle is in operable condition (unless arranged otherwise)</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-2">4.2 Availability and Communication</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Be available for pickup and delivery within agreed windows</li>
                <li>Provide accurate contact information</li>
                <li>Respond to carrier communications promptly</li>
                <li>Have authorized representative present if unable to attend personally</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">5. Insurance and Liability</h2>
              <h3 className="text-lg font-semibold mb-2">5.1 Carrier Insurance</h3>
              <p>All carriers are required to maintain:</p>
              <ul className="list-disc list-inside mt-2 mb-4 space-y-2">
                <li>Minimum $750,000 cargo insurance</li>
                <li>Valid motor carrier authority</li>
                <li>Current DOT registration</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-2">5.2 Damage Claims</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Report any damage immediately upon delivery</li>
                <li>Claims must be filed within 9 months of delivery</li>
                <li>Documentation and photos required for all claims</li>
                <li>Furious Auto Shipping will assist with claim process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">6. Cancellation Policy</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancellations before carrier assignment: full refund of deposit</li>
                <li>Cancellations after carrier assignment: subject to carrier cancellation fees</li>
                <li>Cancellations due to customer unavailability: no refund</li>
                <li>Force majeure events: pro-rated refunds considered case-by-case</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">7. Limitation of Liability</h2>
              <p>
                Furious Auto Shipping's liability is limited to our brokerage fee. We are not liable for:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Carrier delays, damage, or loss</li>
                <li>Weather-related delays</li>
                <li>Mechanical breakdowns</li>
                <li>Personal items left in vehicles</li>
                <li>Consequential or incidental damages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">8. Dispute Resolution</h2>
              <p>
                Any disputes will be resolved through binding arbitration in Miami, Florida, 
                according to the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">9. Privacy Policy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Updated terms will be 
                posted on our website with the revision date. Continued use of our services 
                constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">11. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <p><strong>Furious Auto Shipping</strong></p>
                <p>Email: legal@furiousautoshipping.com</p>
                <p>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</p>
                <p>Address: 123 Transport Way, Miami, FL 33101</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}