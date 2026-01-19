import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import MilitaryShippingAdvantage from './MilitaryShippingAdvantage';
import MilitaryShippingProcess from './MilitaryShippingProcess';

export const metadata = {
    title: 'Military Car Shipping & PCS Vehicle Transport | Active Duty Discount',
    description: 'Trusted PCS vehicle shipping for Active Duty & Veterans. We handle POV transport base-to-base with military discounts. DITY/PPM reimbursement ready.',
    keywords: 'Military auto transport, Military car shipping, winter migration, Military vehicle transport, seasonal auto shipping',

    alternates: {
        canonical: '/services/military-car-shipping',
    },
}

export default function page() {

    const faqs = [
        {
            "question": "Will the military pay to ship my car for a PCS move?",
            "answer": "Typically, the government only pays to ship one POV (Privately Owned Vehicle) for OCONUS (overseas) moves. For CONUS (domestic) moves, you usually pay out of pocket, but you may be able to claim the cost as a tax deduction or as an operating expense if you are doing a DITY (Personally Procured Move). We provide all the necessary weight tickets and invoices for your finance office."
        },
        {
            "question": "Can I pack my military gear or household goods in the car?",
            "answer": "Department of Transportation regulations generally prohibit carrying household goods in a transport vehicle. However, many carriers allow up to 100 lbs of personal items secured in the trunk. We strongly advise against packing sensitive military gear, electronics, or firearms, as these are not covered by the carrier's insurance."
        },
        {
            "question": "How does the military discount work?",
            "answer": "We offer a $50 discount specifically for Active Duty, Retired, Reserve, and National Guard members. Simply mention your service status when you request a quote or book your order, and our logistics specialist will apply the discount immediately."
        },
        {
            "question": "Do you have access to deliver on-base?",
            "answer": "Most commercial car carrier trucks do not have the specific clearance to enter military bases. To avoid delays, we typically arrange to meet you at the Visitor Center, the Main Gate parking lot, or a nearby large commercial lot (like a Walmart) just outside the base."
        },
        {
            "question": "What if my PCS orders change or get delayed?",
            "answer": "We understand that military orders can change at the last minute. We offer flexible rescheduling options. If your reporting date shifts or your orders are amended, just let us know as soon as possible, and we will adjust your pickup or delivery window without a hassle."
        },
        {
            "question": "How far in advance should I book my PCS vehicle transport?",
            "answer": "We recommend booking 2 to 4 weeks before your reporting date to secure the best rate and ensure a spot on a carrier. However, if you received short-notice orders, we can arrange expedited pickup, usually within 24 to 72 hours."
        }
    ];



    return (
        <>
            <CommonHero
                h1="Military Car Shipping (PCS Vehicle Transport)"
                subheading="We serve those who serve. Stress-free PCS vehicle transport with exclusive Active Duty & Veteran discounts—wherever your orders take you."
                img="/images/military-car-shipping.png"
            />

            <section className="section">
                <div className="container">
                    <h2 className="heading-2 mb-6 mt-2">We serve those who serve.</h2>
                    <p className='my-2'>At Furious Auto Shipping, we understand that in the military, "hurry up and wait" is a way of life—until your orders finally drop, and suddenly, you have to move your entire life across the country in a matter of weeks. We are proud to offer a specialized Military Discount (<b className='text-brand-500'>$50 off for Active Duty, Reserves, National Guard & Veterans</b>) because we know that a Permanent Change of Station (PCS) is more than just a move; it’s a mission.</p>
                    <p className='my-2'>With over 7+ years of experience in the auto transport industry, our team has helped thousands of service members relocate their <b>Privately Owned Vehicles (POVs)</b> safely and efficiently. We understand the unique pressures of military life: strict reporting dates, the hassle of clearing housing, and the complexity of DITY/PPM reimbursements. When you choose us for your <Link className='font-bold text-brand-500' href=''>Military Car Shipping (PCS Vehicle Transport)</Link>, you aren't just hiring a truck driver; you are partnering with a logistics team that understands the regulations, the routes, and the realities of base-to-base relocation.</p>

                    <h2 className="heading-2 mb-6 mt-2">Understanding PCS & POV Shipping: Why Transport Instead of Drive?</h2>
                    <p className='my-2'>If you are new to the service or this is your first major move, the acronyms alone can be overwhelming. A <b>PCS (Permanent Change of Station)</b> is a mandatory relocation to a new duty station. Unlike a temporary deployment, this is a long-term move involving your household goods and your vehicles.</p>
                    <p className='my-2'>In military logistics terms, your car is a <b>POV (Privately Owned Vehicle)</b>. While the government will often arrange the transport of one vehicle for OCONUS (Overseas) moves, CONUS (Continental US) moves operate differently. You generally have two choices: drive the vehicle yourself or utilize a private auto transport service.</p>
                </div>
            </section>
            <MilitaryShippingAdvantage />
            <MilitaryShippingProcess />

            <section className="section">
                <div className="container">
                    <div className="overflow-x-auto my-4">
                        <h3 className='text-xl font-bold mb-1'>Military PCS Vehicle Shipping Overview</h3>
                        <table className="w-full border-collapse">
                            <tbody>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        PCS Scenario
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Why Car Shipping Is Ideal
                                    </th>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Cross-country PCS
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        Avoids long drives, multiple hotel stays, and driver fatigue.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Short-notice PCS orders
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        Provides flexible pickup & delivery windows when time is tight.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Family relocation
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        Allows you to focus on the household move and kids, rather than the road.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Multiple POVs
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        Cost-effective multi-vehicle transport prevents the need for a convoy.
                                    </td>
                                </tr>
                            </tbody>
                        </table></div>



                    <h2 className="heading-2 mb-6 mt-2">Base Access Explained: The Reality of Gate Procedures</h2>
                    <p className='my-2'>One of the most critical aspects of base-to-base car shipping is understanding access limitations. This is an area where our 20 years of experience prevents headaches for you.</p>
                    <p className='my-2'>Commercial car haulers operate large, 80-foot stingers (trucks). Furthermore, many civilian truck drivers do not possess a CAC card or specific base clearance. This is standard industry practice. If a company promises you they will drop the car off right in the barracks parking lot or your on-base housing driveway, they are likely over-promising.</p>
                    <p  className="bg-gradient-to-r my-2 from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4"><b>How We Handle Base Deliveries:</b> We coordinate a meetup at a mutually convenient, accessible location. This ensures the driver doesn't get turned away at the gate, causing delays.</p>


                    <div className="my-8">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Base Access & Delivery Options</h3>
  
  <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
    <table className="w-full border-collapse bg-white">
      <thead>
        <tr className="bg-gradient-to-r from-brand-600 to-brand-700">
          <th className="px-6 py-4 text-left font-semibold text-white text-base">
            Delivery Location
          </th>
          <th className="px-6 py-4 text-left font-semibold text-white text-base">
            When It's Used
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-bold text-gray-900">On-base delivery</span>
            </div>
          </td>
          <td className="px-6 py-4 text-gray-700">
            Only when the specific driver has valid base clearance <span className="text-amber-600 font-semibold">(Rare)</span>.
          </td>
        </tr>
        
        <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors bg-brand-25">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
              <span className="font-bold text-gray-900">Visitor Center</span>
            </div>
          </td>
          <td className="px-6 py-4 text-gray-700">
            <div className="flex items-start gap-2">
              <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-2 py-1 rounded">MOST COMMON</span>
              <span>Usually located just outside the gate.</span>
            </div>
          </td>
        </tr>
        
        <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-bold text-gray-900">Main gate</span>
            </div>
          </td>
          <td className="px-6 py-4 text-gray-700">
            Quick handoff point for restricted access areas.
          </td>
        </tr>
        
        <tr className="hover:bg-brand-50 transition-colors">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-bold text-gray-900">Nearby public location</span>
            </div>
          </td>
          <td className="px-6 py-4 text-gray-700">
            Used for large carriers that physically cannot fit through base gates <span className="text-gray-500 italic">(e.g., Walmart or large parking lots)</span>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div className="mt-4 bg-brand-50 border-l-4 border-brand-500 p-4 rounded-r-lg">
    <p className="text-sm text-gray-700">
      <span className="font-semibold text-brand-900">💡 Note:</span> We coordinate with you in advance to determine the most convenient and secure delivery location based on your base's access policies.
    </p>
  </div>
</div>
                    <CommonCTA b={'GET MY MILITARY SHIPPING QUOTE'} />
                    <h2 className="heading-2 mb-6 mt-2">Frequently Served Military Bases</h2>
                    <p className='my-2'>We ship cars to every corner of the United States, but certain routes are the backbone of our military transport division. We are intimately familiar with the logistics, local geography, and gate procedures of the nation's largest installations.</p>
                    <ul>
                        <li className='my-2'><b>Fort Hood (Texas):</b> As one of the largest armored posts in the world, the volume of PCS traffic in and out of Killeen is massive. We have trucks running through Central Texas daily.</li>
                        <li className='my-2'><b>Camp Pendleton (California):</b> Moving vehicles in and out of Southern California requires navigating heavy traffic and specific base entry points. We service the Oceanside area constantly.</li>
                        <li className='my-2'><b>Fort Bragg (North Carolina):</b> The home of the Airborne requires a transport partner who moves fast. We run regular routes connecting Fayetteville to the rest of the East Coast and Texas.</li>
                        <li className='my-2'><b>Naval Station Norfolk (Virginia):</b> The world's largest naval station sees high turnover. We specialize in helping sailors move POVs when transferring from fleet to shore duty or changing homeports.</li>
                    </ul>

                    <h2 className="heading-2 mb-6 mt-2">DITY / PPM Reimbursement Support</h2>
                    <p className='my-2'>If you are executing a Personally Procured Move (PPM), formerly known as a DITY move, you are entitled to reimbursement for moving your own household goods. While the government typically pays for one POV shipment if you are going OCONUS, rules for CONUS moves can vary, and many service members pay out of pocket to ship a second vehicle.</p>
                    <p className='my-2'>However, if you are authorized to ship a vehicle at government expense, or if you are claiming it as an operating expense against your DITY incentive, paperwork is everything. The Finance Office will kick back anything that isn't perfectly documented.</p>

                    <div class="bg-gradient-to-br my-5 from-brand-50 to-slate-50 rounded-xl p-8 border-l-4 border-brand-600 shadow-lg">
                        <div class="flex items-start gap-4 mb-6">
                            <div class="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 ">We provide DITY-compliant invoicing that includes</h3>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-green-600 font-bold text-lg">✓</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-gray-900 mb-1">Zero-Balance Receipts</p>
                                        <p class="text-sm text-gray-600">Proof that the service was paid for.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-green-600 font-bold text-lg">✓</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-gray-900 mb-1">VIN Specification</p>
                                        <p class="text-sm text-gray-600">Clearly listing the vehicle transported.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-green-600 font-bold text-lg">✓</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-gray-900 mb-1">Origin/Destination</p>
                                        <p class="text-sm text-gray-600">Matching your PCS orders.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-green-600 font-bold text-lg">✓</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-gray-900 mb-1">Weight Tickets (if required)</p>
                                        <p class="text-sm text-gray-600">We can guide you on how to handle weight tickets if your specific branch requires them for vehicle weight allowances.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CommonCTA b={'GET MY MILITARY SHIPPING QUOTE'} />
                    <div className="overflow-x-auto my-4">
                        <h3 className='text-xl font-bold mb-1'>DITY / PPM Reimbursement Support</h3>
                        <table className="w-full border-collapse">
                            <tbody>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Item
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        How We Support
                                    </th>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Invoice format
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        tailored to be PCS & DITY compliant for finance officers.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Vehicle details
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        Full VIN, origin, and destination clearly listed on all paperwork.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Cost breakdown
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        Transparent pricing accepted for reimbursement claims.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Payment proof
                                    </th>
                                    <td className="px-4 py-3 text-left text-sm text-gray-700">
                                        "Paid in Full" receipts provided immediately for the finance office.
                                    </td>
                                </tr>
                            </tbody>
                        </table></div>


                    <h2 className="heading-2 mb-6 mt-2">Military Discount Auto Transport: Real Appreciation</h2>
                    <p className='my-2'>We don't offer a military discount as a marketing gimmick; we offer it because we respect the sacrifice you make.</p>

                    <ul>
                        <li className='my-2'><b>Active Duty:</b> Whether you are <b>Army, Navy, Air Force, Marines, Space Force, or Coast Guard</b>.</li>
                        <li className='my-2'><b>Veterans & Retirees:</b> If you have served, you qualify.</li>
                        <li className='my-2'><b>Reserves & National Guard:</b> We support those who stand ready.</li>
                    </ul>
                    <p className='my-2'>When you request your quote, simply let our logistics specialist know your status. The <b className='text-brand-500'>$50 discount</b> is applied directly to your shipping cost. We want to make ship car to new duty station the easiest item on your checkout checklist.</p>

                    <h2 className="heading-2 mb-6 mt-2">High-Value PCS Auto Shipping Routes</h2>
                    <p className='my-2'>We operate nationwide, but our network is optimized for the most common transfer routes. By utilizing these high-volume lanes, we can often secure faster pickup times and better pricing for our military clients.</p>
                    <h3 className="text-4xl my-4 font-semibold text-gray-900">Popular Base-to-Base Routes:</h3>
                    <ul className='list-disc ml-4'>
                        <li className='my-2'><Link className='font-bold text-brand-500' href='/locations/texas/north-carolina'>Texas → North Carolina</Link><b>:</b> A massive volume of personnel moves between Fort Hood to Fort Bragg PCS moves. We have carriers on this lane constantly.</li>
                        <li className='my-2'><Link className='font-bold text-brand-500' href='/locations/california/texas'>California → Texas</Link><b>:</b> One of the most common relocation corridors is Camp Pendleton to Fort Hood transfers, moving from Marine to Army infrastructure or returning to home of record.</li>
                        <li className='my-2'><Link className='font-bold text-brand-500' href='/locations/virginia/florida'>Virginia → Florida</Link><b>:</b> We handle frequent Naval Station Norfolk relocations down to Jacksonville or Mayport, supporting the Atlantic Fleet.</li>
                        <li className='my-2'><Link className='font-bold text-brand-500' href='/locations/california/north-carolina'>California → North Carolina</Link><b>:</b> For those facing a complete coast-to-coast reassignment, our Coast-to-coast PCS assignments service bridges the gap between Camp Pendleton and Lejeune or Bragg.</li>
                        <li className='my-2'><Link className='font-bold text-brand-500' href='/locations/texas/georgia'>Texas → Georgia</Link><b>:</b> We specialize in Army to Army base transfers, specifically the heavy traffic between Texas bases and Fort Moore (Benning) or Stewart.</li>
                        <li className='my-2'><Link className='font-bold text-brand-500' href='/locations/north-carolina/texas'>North Carolina → Texas</Link><b>:</b> The Return PCS or reassignment route back to Texas is just as busy as the outbound leg.</li>
                    </ul>

                    <h3 className="text-4xl my-4 font-semibold text-gray-900">City-Level PCS Routes:</h3>
                    <ul className='list-disc ml-4'>
                        <li className='my-2'><b>Killeen, TX → Fayetteville, NC:</b> Fort Hood ↔ Fort Bragg</li>
                        <li className='my-2'><b>Oceanside, CA → Killeen, TX:</b> Camp Pendleton relocations</li>
                        <li className='my-2'><b>Norfolk, VA → Jacksonville, FL:</b> Navy PCS moves</li>
                        <li className='my-2'><b>San Diego, CA → Fayetteville, NC:</b> Cross-country PCS</li>
                        <li className='my-2'><b>El Paso, TX → Savannah, GA:</b> Army base transfers (Bliss to Stewart)</li>
                    </ul>

                    <h2 className="heading-2 mb-6 mt-2">Who This Service Is Built For</h2>
                    <p className='my-2'>Furious Auto Shipping has tailored this service specifically for:</p>
                    <ul>
                        <li className='my-2'><b>Active Duty Service Members:</b> needing reliable transport that aligns with reporting dates.</li>
                        <li className='my-2'><b>Military Families:</b> who need to fly to the new station while we handle the heavy lifting of the family SUV.</li>
                        <li className='my-2'><b>Veterans & Retirees:</b> moving to their "forever home" after separation.</li>
                        <li className='my-2'><b>Short-Notice PCS Orders:</b> When you have less than 30 days to clear the base, we can expedite the process.</li>
                    </ul>

                    <h2 className="heading-2 mb-6 mt-2">Ready to Move? We’ve Got the Wheel.</h2>
                    <p className='my-2'>You have your orders. You have your reporting date. Now let us handle the road. Don't leave your <Link className='font-bold text-brand-500' href=''>Military Car Shipping (PCS Vehicle Transport)</Link> to a generic carrier who doesn't understand the difference between a PCS and a vacation.</p>
                    <p className='my-2'>Trust the team with over 20 years of experience moving America's military. We ensure your vehicle arrives safely, so you can focus on the mission ahead.</p>
                    <p className='my-2'>Secure Your Military Discount Today. Call our PCS Transport Specialists or fill out our quote form to get started. We are standing by to get you moving.</p>



                </div>
            </section>

            <CommonCTA b={'GET MY MILITARY SHIPPING QUOTE'} />
            <FAQ
                title="Military Car Shipping FAQ"
                subtitle="Common questions about Military Car Shipping services"
                faqs={faqs} />


        </>
    )
}
