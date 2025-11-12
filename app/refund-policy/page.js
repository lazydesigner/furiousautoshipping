export const metadata = {
  title: 'Refund Policy | Furious Auto Shipping Cancellation & Refunds',
  description: 'Comprehensive refund and cancellation policy for Furious Auto Shipping services, including deposit refunds and cancellation terms.',
  keywords: 'auto transport refund policy, car shipping cancellation, vehicle transport refunds, auto shipping deposit refund',
}

export default function RefundPolicyPage() {
  return (
    <div className="pt-20">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Refund Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: January 1, 2024
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-green-900 mb-3">Our Commitment</h2>
              <p className="text-green-800">
                At Furious Auto Shipping, we are committed to transparent and fair refund practices.
                This policy outlines the conditions under which refunds are provided for our
                auto transport brokerage services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">1. Refund Policy Overview</h2>

              <h3 className="text-lg font-semibold mb-2">1.1 General Principles</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Refunds are processed based on the stage of service completion</li>
                <li>Deposits are refundable under specific conditions outlined below</li>
                <li>Processing fees may apply to certain refund scenarios</li>
                <li>Refunds typically processed within 5-10 business days</li>
                <li>Original payment method used for refund where possible</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">1.2 Service Stages</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li><strong>Stage 1:</strong> Quote provided, no deposit paid</li>
                  <li><strong>Stage 2:</strong> Deposit paid, carrier not yet assigned</li>
                  <li><strong>Stage 3:</strong> Carrier assigned, pickup not yet scheduled</li>
                  <li><strong>Stage 4:</strong> Pickup scheduled, vehicle not yet collected</li>
                  <li><strong>Stage 5:</strong> Vehicle in transit</li>
                  <li><strong>Stage 6:</strong> Vehicle delivered</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">2. Deposit Refund Conditions</h2>

              <h3 className="text-lg font-semibold mb-2">2.1 Full Refund Scenarios</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">100% Refund Available:</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Cancellation before carrier assignment (Stage 2)</li>
                  <li>We cannot find a carrier within 14 days of booking</li>
                  <li>Carrier cancels pickup without customer fault</li>
                  <li>Service failure on our part (misrepresentation, error)</li>
                  <li>Customer relocates to non-serviceable area before pickup</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold mb-2">2.2 Partial Refund Scenarios</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-yellow-900 mb-2">Partial Refund (typically 50-75%):</h4>
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li>Customer cancellation after carrier assignment but before pickup</li>
                  <li>Customer unavailable for scheduled pickup (first attempt)</li>
                  <li>Vehicle condition differs significantly from description</li>
                  <li>Customer requests service changes requiring new carrier</li>
                  <li>Mutual agreement to cancel due to unforeseen circumstances</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold mb-2">2.3 No Refund Scenarios</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-900 mb-2">No Refund Available:</h4>
                <ul className="list-disc list-inside space-y-2 text-red-800">
                  <li>Customer cancellation after vehicle pickup</li>
                  <li>Customer repeatedly unavailable for pickup</li>
                  <li>Customer provides false information affecting service</li>
                  <li>Customer violates terms of service</li>
                  <li>Delivery delays due to weather or circumstances beyond control</li>
                  <li>Customer dissatisfaction with carrier performance (not service failure)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">3. Cancellation Procedures</h2>

              <h3 className="text-lg font-semibold mb-2">3.1 How to Cancel</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Contact customer service immediately by phone or email</li>
                <li>Provide booking confirmation number and reason for cancellation</li>
                <li>Written cancellation request required for processing</li>
                <li>Cancellation must be confirmed by our customer service team</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">3.2 Cancellation Timeline</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Before Carrier Assignment (Stage 2)</h4>
                  <p className="text-sm text-gray-600">Full refund minus $25 processing fee</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">After Carrier Assignment (Stage 3)</h4>
                  <p className="text-sm text-gray-600">Partial refund minus carrier cancellation fees</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-700">After Pickup Scheduled (Stage 4)</h4>
                  <p className="text-sm text-gray-600">Limited refund based on carrier terms</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">After Vehicle Pickup (Stage 5+)</h4>
                  <p className="text-sm text-gray-600">No refund available</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">4. Refund Processing</h2>

              <h3 className="text-lg font-semibold mb-2">4.1 Processing Timeline</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Credit Card Refunds:</strong> 5-10 business days</li>
                <li><strong>Bank Transfer Refunds:</strong> 3-7 business days</li>
                <li><strong>Check Refunds:</strong> 7-14 business days</li>
                <li><strong>Complex Cases:</strong> Up to 21 business days</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">4.2 Refund Methods</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Refunds issued to original payment method when possible</li>
                <li>Credit card refunds processed automatically</li>
                <li>Check refunds for cash payments or upon request</li>
                <li>Bank transfers available for ACH payments</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">4.3 Processing Fees</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Standard processing fee: $25 for administrative costs</li>
                <li>No processing fee for service failures on our part</li>
                <li>Carrier cancellation fees passed through to customer</li>
                <li>International refunds may incur additional fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">5. Special Circumstances</h2>

              <h3 className="text-lg font-semibold mb-2">5.1 Emergency Situations</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Medical emergencies: case-by-case review</li>
                <li>Death in family: full refund with documentation</li>
                <li>Military deployment: full refund with orders</li>
                <li>Natural disasters: flexible refund policy</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">5.2 Service Failures</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Carrier no-shows: full refund plus compensation</li>
                <li>Significant delivery delays (carrier fault): partial compensation</li>
                <li>Vehicle damage during transport: insurance claim assistance</li>
                <li>Misrepresentation of services: full refund</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">5.3 Customer Fault Scenarios</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Providing incorrect vehicle information</li>
                <li>Being unavailable for scheduled pickup/delivery</li>
                <li>Refusing to pay carrier upon delivery</li>
                <li>Vehicle not prepared according to requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">6. Dispute Resolution Process</h2>

              <h3 className="text-lg font-semibold mb-2">6.1 Internal Review Process</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Initial Review</h4>
                    <p className="text-sm text-gray-600">Customer service reviews refund request within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Management Review</h4>
                    <p className="text-sm text-gray-600">Disputed cases escalated to management within 48 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Final Decision</h4>
                    <p className="text-sm text-gray-600">Final refund decision communicated within 72 hours</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 mt-6">6.2 External Resolution</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Better Business Bureau complaint process available</li>
                <li>State transportation commission complaints</li>
                <li>Small claims court for disputes under $5,000</li>
                <li>Arbitration for larger disputes per Terms of Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">7. Refund Request Requirements</h2>

              <h3 className="text-lg font-semibold mb-2">7.1 Required Information</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Booking confirmation number</li>
                <li>Customer name and contact information</li>
                <li>Reason for refund request</li>
                <li>Supporting documentation (if applicable)</li>
                <li>Preferred refund method</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">7.2 Documentation Requirements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Medical emergencies: doctor's note or hospital documentation</li>
                <li>Military deployment: official orders</li>
                <li>Death in family: death certificate or obituary</li>
                <li>Service failures: email correspondence or photos</li>
                <li>Vehicle issues: mechanic reports or photos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-3 mb-4">8. Contact Information for Refunds</h2>
              <p className="mb-4">
                To request a refund or discuss cancellation options:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div>
                  <p><strong>Refund Department</strong></p>
                  <p>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</p>
                  <p>Email: refunds@furiousautoshipping.com</p>
                </div>
                <div>
                  <p><strong>Business Hours:</strong></p>
                  <p>Monday-Friday: 7:00 AM - 9:00 PM EST</p>
                  <p>Saturday: 8:00 AM - 6:00 PM EST</p>
                  <p>Sunday: 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}