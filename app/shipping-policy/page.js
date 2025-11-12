export const metadata = {
  title: 'Shipping Policy | Furious Auto Shipping Terms & Conditions',
  description: 'Complete shipping policy and terms for Furious Auto Shipping auto transport services, including pickup, delivery, insurance, and liability information.',
  keywords: 'auto transport shipping policy, car shipping terms, vehicle transport conditions, auto shipping policy',
}

export default function ShippingPolicyPage() {
  return (
    <div className="pt-20">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Shipping Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: January 1, 2025
            </p>

            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Important Notice</h2>
              <p className="text-blue-800">
                Furious Auto Shipping operates as a licensed auto transport broker connecting customers 
                with certified motor carriers. This shipping policy outlines the terms and conditions 
                for our auto transport services across the United States.
              </p>
            </div> */}

            <section className="mb-8">
              <h2 className="heading-3 mb-4">1. Service Overview</h2>
              
              <h3 className="text-lg font-semibold mb-2">1.1 Brokerage Services</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>We act as a broker, connecting customers with licensed motor carriers</li>
                <li>All actual transport is performed by third-party carriers</li>
                <li>We coordinate pickup, transport, and delivery on behalf of customers</li>
                <li>Services available to all 50 states, including Alaska and Hawaii</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">1.2 Transport Types</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Open Transport:</strong> Standard car carriers, most economical option</li>
                <li><strong>Enclosed Transport:</strong> Covered trailers for premium protection</li>
                <li><strong>Door-to-Door:</strong> Pickup and delivery at specified addresses</li>
                <li><strong>Terminal-to-Terminal:</strong> Pickup and delivery at designated facilities</li>
                <li><strong>Expedited Service:</strong> Priority scheduling for urgent shipments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">2. Booking and Scheduling</h2>
              
              <h3 className="text-lg font-semibold mb-2">2.1 Quote Process</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Quotes are estimates based on current market conditions</li>
                <li>Final pricing confirmed upon carrier assignment</li>
                <li>Quotes valid for 7 days from issue date</li>
                <li>Seasonal fluctuations may affect final pricing</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">2.2 Booking Requirements</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Deposit required to secure booking (typically $100-300)</li>
                <li>Valid contact information and availability required</li>
                <li>Vehicle information must be accurate and complete</li>
                <li>Special requirements must be disclosed at booking</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">2.3 Scheduling Windows</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Pickup windows typically 1-7 days from first available date</li>
                <li>Delivery windows provided upon carrier assignment</li>
                <li>Exact dates cannot be guaranteed due to logistics variables</li>
                <li>Expedited service offers narrower scheduling windows</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">3. Vehicle Requirements and Preparation</h2>
              
              <h3 className="text-lg font-semibold mb-2">3.1 Acceptable Vehicles</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Standard passenger vehicles, SUVs, pickup trucks</li>
                <li>Vehicles up to 8 feet wide, 14 feet high, 22 feet long</li>
                <li>Maximum weight: 5,000 lbs (additional fees for heavier vehicles)</li>
                <li>Running and non-running vehicles accepted</li>
                <li>Classic, luxury, and modified vehicles with proper disclosure</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">3.2 Vehicle Preparation</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Remove all personal items (carriers not liable for personal belongings)</li>
                <li>Fuel tank must be 1/4 full or less</li>
                <li>Disable car alarms and anti-theft devices</li>
                <li>Remove or secure loose parts, accessories, and antennas</li>
                <li>Document existing damage with photos</li>
                <li>Ensure spare tire and jack are secure</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">3.3 Prohibited Items</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal belongings, luggage, or household items</li>
                <li>Hazardous materials or flammable liquids</li>
                <li>Weapons, ammunition, or illegal substances</li>
                <li>Electronics or valuable items</li>
                <li>Items that exceed DOT regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">4. Pickup and Delivery</h2>
              
              <h3 className="text-lg font-semibold mb-2">4.1 Pickup Requirements</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Customer or authorized agent (18+) must be present</li>
                <li>Valid photo ID required</li>
                <li>Vehicle keys and any remotes must be provided</li>
                <li>Pre-transport inspection conducted and documented</li>
                <li>Bill of Lading signed acknowledging vehicle condition</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">4.2 Delivery Process</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Carrier contacts recipient 24-48 hours before delivery</li>
                <li>Post-transport inspection conducted upon delivery</li>
                <li>Any damage must be noted on delivery receipt immediately</li>
                <li>Final payment due to carrier upon delivery</li>
                <li>Keys released upon completion of delivery process</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">4.3 Delivery Locations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Door-to-door service to accessible locations</li>
                <li>Large trucks may require nearby accessible area</li>
                <li>Terminal delivery available in major metropolitan areas</li>
                <li>Remote locations may incur additional fees</li>
                <li>Delivery during normal business hours preferred</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">5. Insurance and Liability</h2>
              
              <h3 className="text-lg font-semibold mb-2">5.1 Carrier Insurance</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>All carriers maintain minimum $750,000 cargo insurance</li>
                <li>Insurance covers damage during loading, transport, and unloading</li>
                <li>Coverage subject to carrier's insurance terms and conditions</li>
                <li>Pre-existing damage not covered</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">5.2 Damage Claims</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>All damage must be noted on delivery receipt</li>
                <li>Claims must be filed within 7 days of delivery</li>
                <li>Photo documentation required for all claims</li>
                <li>Repair estimates from authorized facilities required</li>
                <li>Claims processed according to carrier's insurance policies</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">5.3 Liability Limitations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Furious Auto Shipping liability limited to brokerage fee</li>
                <li>Not liable for carrier delays, damage, or performance</li>
                <li>Personal items left in vehicle not covered</li>
                <li>Mechanical problems not related to transport not covered</li>
                <li>Weather-related delays not grounds for compensation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">6. Payment Terms</h2>
              
              <h3 className="text-lg font-semibold mb-2">6.1 Payment Structure</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Deposit due upon booking to secure services</li>
                <li>Balance due to carrier upon delivery</li>
                <li>No payment due if carrier fails to pickup vehicle</li>
                <li>Additional fees may apply for special services</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">6.2 Accepted Payment Methods</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Cash payments to driver upon delivery</li>
                <li>Certified checks or money orders</li>
                <li>Credit cards (where accepted by carrier)</li>
                <li>Electronic transfers for deposits</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">6.3 Additional Fees</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Non-running vehicles: additional $150-300</li>
                <li>Oversized vehicles: additional $100-500</li>
                <li>Remote pickup/delivery: $50-200</li>
                <li>Storage fees if customer unavailable: $25-50/day</li>
                <li>Expedited service: $200-500</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">7. Customer Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate vehicle and contact information</li>
                <li>Be available during agreed pickup and delivery windows</li>
                <li>Properly prepare vehicle according to requirements</li>
                <li>Maintain communication with carrier and broker</li>
                <li>Conduct thorough inspections at pickup and delivery</li>
                <li>Report any issues or concerns immediately</li>
                <li>Make final payment upon satisfactory delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">8. Force Majeure</h2>
              <p className="mb-4">
                Neither Furious Auto Shipping nor contracted carriers are liable for delays 
                or failures caused by circumstances beyond reasonable control, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Weather conditions and natural disasters</li>
                <li>Road closures and traffic restrictions</li>
                <li>Mechanical breakdowns and vehicle issues</li>
                <li>Government regulations and inspections</li>
                <li>Labor disputes and strikes</li>
                <li>Acts of terrorism or war</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">9. Dispute Resolution</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Disputes should be reported to customer service immediately</li>
                <li>We will work to resolve issues directly with customers</li>
                <li>Mediation available for unresolved disputes</li>
                <li>Binding arbitration in Miami, Florida for legal disputes</li>
                <li>Small claims court option available for eligible disputes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">10. Contact Information</h2>
              <p className="mb-4">
                For questions about this shipping policy or to report issues:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Furious Auto Shipping</strong></p>
                <p><strong>Customer Service Department</strong></p>
                <p>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</p>
                <p>Email: support@furiousautoshipping.com</p>
                <p>Hours: Monday-Friday 7 AM - 9 PM EST</p>
                <p>Weekend: Saturday-Sunday 8 AM - 6 PM EST</p>
                <p>Emergency Line: Available 24/7 for active shipments</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">11. Policy Updates</h2>
              <p>
                This shipping policy may be updated periodically to reflect changes in our 
                services, regulations, or industry standards. Updated policies will be posted 
                on our website with the revision date. Customers with active bookings will be 
                notified of any material changes that affect their shipments.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}