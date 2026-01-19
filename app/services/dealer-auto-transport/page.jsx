import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import LinkPage from './LinkPage'
import { Settings, Send, Truck, MapPin, Bell, FileText, ArrowRight } from 'lucide-react';
import CommonCTA from '@/components/CommonCTA';

    
export const metadata = {
    title: 'Dealer Auto Transport Services | Auction & Inventory Logistics',
    description: 'Reliable B2B auto transport for dealerships and auctions (Manheim, Adesa). Bulk shipping discounts and fast inventory turnover. Open a dealer account today.',
    keywords: 'dealer auto transport, seasonal car shipping, winter migration, dealer vehicle transport, seasonal auto shipping',

    alternates: {
        canonical: '/services/dealer-auto-transport',
    },
}

const ComponentName = () => {

    const faqs = [
        {
            question: "How quickly can you move inventory from an auction to my dealership?",
            answer: "We prioritize speed for dealers; most regional auction lanes (under 500 miles) are completed within 24 to 48 hours of dispatch. For cross-country moves, we typically average 3–5 days. We understand that \"days to lot\" affects your holding costs, so we pre-stage carriers at major hubs like Manheim and Adesa to ensure your vehicles move as soon as the gate pass is released."
        },
        {
            question: "Do you offer volume discounts for full truckload (9-car) shipments?",
            answer: "Yes, shipping a full 9-car load is the most cost-effective way to move inventory. When you fill a carrier completely, we can typically lower the per-unit cost by 15–20% compared to single-unit rates. This is ideal for bulk auction purchases or large inter-store transfers. Contact our B2B team to lock in a dedicated \"lane rate\" for your recurring routes."
        },
        {
            question: "How do you handle auction gate passes and release forms?",
            answer: "Our team manages the entire release process for you. Once you provide the Buyer Number and Lot Number, we upload the Gate Pass directly to the carrier’s dispatch app. Our drivers are registered with all major auctions (Manheim, Copart, IAA, Adesa) and know the specific gate hours and exit procedures, preventing \"dry runs\" or storage fee delays."
        },
        {
            question: "Can you transport non-running (inop) vehicles bought at auction?",
            answer: "Yes, we specialize in moving inop and salvage vehicles. Whether the unit has a dead battery or significant collision damage, we dispatch carriers equipped with winches and forklifts. Please note that \"non-running\" status must be declared at booking, as it requires specific equipment and typically incurs a standard inop fee (usually $150–$200) for the extra labor involved."
        },
        {
            question: "Is my inventory fully insured during a dealer trade?",
            answer: "Yes, every vehicle is covered by the carrier’s Cargo Insurance policy from pickup to delivery. We verify that all our B2B carriers maintain active policies (typically $250,000+ per load) to cover total loss or damage. For high-value loads (exotics or luxury fleets), we can arrange supplemental insurance certificates (COI) listing your dealership as the certificate holder."
        },
        {
            question: "Do you prioritize dealer trades over retail shipments?",
            answer: "Yes, Dealer Trades are flagged as \"Priority Dispatch\" in our system. We understand these vehicles often have a retail customer waiting on the other end. While retail shipping windows are flexible, dealer trades are treated as time-critical logistics operations, often utilizing hot-shot haulers (3-car wedges) for faster, direct delivery between stores."
        }
    ];

    const steps = [
        {
            icon: Settings,
            title: "Account Setup & Lane Analysis",
            description: "We review your frequent routes and set baseline pricing."
        },
        {
            icon: Send,
            title: "Dispatch Request",
            description: "You send us the VINs and release numbers (via email, portal, or text)."
        },
        {
            icon: Truck,
            title: "Carrier Assignment",
            description: "We utilize our vetted B2B car hauling network to assign the right carrier (Open vs. Enclosed)."
        },
        {
            icon: MapPin,
            title: "Auction/Dealer Pickup",
            description: "The driver executes the inspection (BOL) and retrieves the keys/title."
        },
        {
            icon: Bell,
            title: "Transit & Updates",
            description: "You receive automated notifications when the unit is picked up and when it is nearing delivery."
        },
        {
            icon: FileText,
            title: "Delivery & Billing",
            description: "Vehicles are offloaded, inspected, and signed for. You receive a consolidated invoice."
        }
    ];
    return (
        <>
            <CommonHero
                h1="Dealer Auto Transport Services: High-Velocity Logistics for Dealerships & Auctions"
                subheading="Turn Inventory Faster. Reliable, High-Volume Shipping from Auction to Lot in 3 Days."
                img="/images/dealer-auto-transport.png"
            />

            <section className="section">
                <div className="container">
                    <h2 className="heading-2 mb-6">Speed is the currency of the automotive industry.</h2>
                    <p className='my-2'>In the dealership world, every day a vehicle sits idle on a transporter or stuck at an auction lot is a day it’s costing you money. Floorplan interest accumulates, market values fluctuate, and retail opportunities are missed. You don’t need a generic car shipper; you need a logistics partner who understands that <b>inventory velocity</b> determines profitability.</p>
                    <p className='my-2'>At <b>Furious Auto Shipping</b>, we have spent over 7 years refining our <Link className='font-bold text-brand-500' href=''>Dealer Auto Transport Services</Link> to meet the rigorous demands of franchise dealerships, independent groups, and wholesale buyers. We understand that getting a unit from the auction block to your front line in 3 days instead of 10 isn't just a convenience—it’s a competitive advantage.</p>
                    <p className='my-2'>Our logistics infrastructure is built to support high-volume moves, dealer trades, and auction sweeps with precision. We handle the logistics so you can focus on what matters: turning inventory.</p>


                    <h2 className='heading-2 mb-6 mt-4'>The Furious Advantage: Dealer-Focused Auto Transport Solutions</h2>
                    <p className='my-2'>We are not just moving metal; we are managing your supply chain. Our B2B operations team is trained specifically to handle the complexities of commercial auto transport. Whether you are acquiring inventory from out-of-state auctions or executing a multi-car dealer trade to balance stock levels, our network is optimized for you.</p>
                    <p className='my-2'>We provide a seamless operational extension to your dealership for:</p>
                    <ul>
                        <li className='my-2'><b>Dealer Trades:</b> Rapid transport between franchise locations to close sales faster.</li>
                        <li className='my-2'><b>Auction Logistics:</b> Priority dispatch from major auction houses (Manheim, Adesa, IAA, Copart) directly to your lot.</li>
                        <li className='my-2'><b>Inter-Store Transfers:</b> Moving aging inventory between your group’s locations to fresh markets.</li>
                        <li className='my-2'><b>Online & Remote Deliveries:</b> Direct-to-consumer delivery for your out-of-state online buyers, branded professionally.</li>
                    </ul>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-5">
                        {/* Auction Network List */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-2 text-xl font-medium text-gray-900">
                                Auction Network List
                            </h3>
                            <p className="mb-6 text-sm text-gray-600">
                                Major auto auctions we service nationwide
                            </p>

                            <ul className="space-y-4">
                                {["Manheim", "Copart", "ADESA"].map((auction) => (
                                    <li key={auction} className="flex items-center gap-3">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                                            <svg
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-gray-800 font-medium">
                                            {auction}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Volume Pricing Tier Table */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-6 text-xl font-medium text-gray-900">
                                Volume Pricing Tiers
                            </h3>

                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-100 text-gray-700">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold">
                                                Vehicle Count
                                            </th>
                                            <th className="px-4 py-3 font-semibold">
                                                Pricing Tier
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="px-4 py-3">1–2 Cars</td>
                                            <td className="px-4 py-3 font-medium">
                                                Standard Rate
                                            </td>
                                        </tr>
                                        <tr className="border-t bg-gray-50">
                                            <td className="px-4 py-3">3–5 Cars</td>
                                            <td className="px-4 py-3 font-medium">
                                                Discounted Rate
                                            </td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-3">6–9 Cars</td>
                                            <td className="px-4 py-3 font-medium">
                                                Bulk Rate
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <CommonCTA  b={'Get A Volume Quote Now'} />

                    <h3 className="text-4xl my-4 font-semibold text-gray-900">Strategic Inventory Movement</h3>
                    <p className='my-2'>The modern dealership isn't limited by geography. Buying inventory in the Midwest to sell in the South? Sourcing rust-free trucks from the West Coast? Our Dealer Auto Transport Services bridge the gap, allowing you to source vehicles where they are cheapest and sell them where they command the highest gross.</p>

                    <h2 className='heading-2 mb-6 mt-4'>Bulk Discounts & Volume Pricing</h2>
                    <p className='my-2'>One-off shipping rates kill margins. That is why we offer structured volume pricing designed for scalability. We treat your transport needs as a portfolio, not individual transactions.</p>
                    <p className='my-2'>By consolidating your shipments, we can utilize full 9-car haulers rather than relying on piecemeal 3-car wedges. This efficiency lowers fuel costs per unit, and we pass those savings directly to your bottom line.</p>


                    <div className="overflow-x-auto my-4">
                        <p className='text-xl font-bold'>Volume Pricing Tiers & Benefits</p>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Shipment Type
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Unit Count
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Key Benefit
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Typical Savings
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className={`border-b border-gray-200 bg-white`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Single Unit</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">1 Vehicle</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">Speed & Flexibility (Expedited)</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Standard Market Rate</td>
                                </tr>
                                <tr
                                    className={`border-b border-gray-200 bg-gray-50`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>LTL (Less Than Load)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">3-5 Vehicles</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">Shared Trailer Efficiency</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">10-15% off per unit</td>
                                </tr>
                                <tr
                                    className={`border-b border-gray-200 bg-white`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Full Truckload</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">7-9 Vehicles</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">Maximum Priority & Direct Route</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">20-25% off per unit</td>
                                </tr>
                                <tr
                                    className={`border-b border-gray-200 bg-gray-50`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Recurring Lane</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">10+ Monthly</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">Contracted Fixed Pricing</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Custom Corporate Rates</td>
                                </tr>
                            </tbody>
                        </table>
                        <small><b>Note:</b> Contact our B2B team for a custom rate sheet based on your specific monthly volume.</small>
                    </div>

                                <CommonCTA b={'Get A Volume Quote Now'} />

                    <h2 className='heading-2 mb-6 mt-4'>Auto Auction Expertise: Manheim, Adesa & Copart</h2>
                    <p className='my-2'>Buying at auction is high-stress; shipping shouldn't be. We are deeply embedded in the logistics ecosystem of every major auction house in the United States. We understand that <Link className='font-bold text-brand-500' href=''>auto auction shipping</Link> requires more than just a truck—it requires administrative precision.</p>
                    <p className='my-2'>Our drivers and dispatchers are well-versed in:</p>
                    <ul>
                        <li className='my-2'><b>Gate Passes & Release Forms:</b> We ensure all paperwork is in order before the driver arrives, preventing "dry runs" and storage fees.</li>
                        <li className='my-2'><b>Gate Hours & Procedures:</b> We know the loading times for Manheim Pennsylvania vs. Adesa Phoenix and plan arrivals to avoid lockouts.</li>
                        <li className='my-2'><b>Inop & Forklift Handling:</b> Buying from Copart or IAA? We have the winches and specialized equipment to load non-running units safely.</li>
                    </ul>

                    <h3 className="text-4xl my-4 font-semibold text-gray-900">The Auction-to-Lot Timeline</h3>
                    <p className='my-2'>We track <b>Manheim auction transport</b> metrics closely. By pre-booking carriers on auction days, we often secure space before the sale even ends, ensuring your vehicles leave the gate while your competitors are still calling brokers.</p>

                    <h2 className='heading-2 mb-6 mt-4'>Key Dealer Trade & High-Frequency Routes</h2>
                    <p className='my-2'>We operate on a national scale, but we specialize in the high-frequency lanes that keep the US automotive market moving. By focusing on these "logistics corridors," we can offer faster pickup windows and more predictable delivery times (ETAs).</p>


                    <div className="overflow-x-auto my-4">
                        <p className='text-xl font-bold'>Primary Dealer Logistics Corridors</p>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-300">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Origin Hub
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Destination Hub
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Avg. Transit Time
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                        Primary Inventory Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className={`border-b border-gray-200 bg-white`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Florida (Orlando/Miami)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700"><b>New Jersey / New York</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">2 - 4 Days</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Lease Returns / Snowbird Units</td>
                                </tr>
                                <tr
                                    className={`border-b border-gray-200 bg-gray-50`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Texas (Dallas/Houston)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700"><b>California (LA/SFO)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">3 - 5 Days</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Rust-Free Trucks / Exotics</td>
                                </tr>
                                <tr
                                    className={`border-b border-gray-200 bg-white`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Illinois (Chicago)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700"><b>Florida (Tampa/Miami)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">3 - 4 Days</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Seasonal Inventory Swaps</td>
                                </tr>
                                <tr
                                    className={`border-b border-gray-200 bg-gray-50`}
                                >
                                    <td className="px-4 py-3 text-sm"><b>Arizona (Phoenix)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700"><b>Texas (Dallas)</b></td>
                                    <td className="px-4 py-3 text-sm text-gray-700">1 - 2 Days</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Auction Transfers (Adesa/Manheim)</td>
                                </tr>
                            </tbody>
                        </table>
                        <small><b>Note:</b> These routes are serviced daily. If you are moving inventory along these lines, we likely have a truck passing by right now.</small>
                    </div>

                    <CommonCTA b={'Get A Volume Quote Now'} />

                </div>

            </section>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                            How Our Dealer Transport Process Works
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            We have stripped away the friction. You don't have time to call for status updates five times a day.
                            Our process is <span className="font-semibold text-slate-900">"fire and forget"</span>—you dispatch it, we handle the rest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center mb-3">
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mr-3">
                                                        {index + 1}
                                                    </span>
                                                    <h3 className="text-lg font-bold text-slate-900">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-slate-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <>
                                            <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                                                <ArrowRight className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <div className="lg:hidden flex justify-center my-4">
                                                <ArrowRight className="w-8 h-8 text-blue-600 transform rotate-90" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-900 px-6 py-3 rounded-full border-2 border-blue-200">
                            <Truck className="w-5 h-5" />
                            <span className="font-semibold">Simple. Automated. Reliable.</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <h2 className='heading-2 mb-6 mt-4'>Insurance, Compliance & Risk Management</h2>
                    <p className='my-2'>In the B2B world, liability is a major concern. You are entrusting us with hundreds of thousands of dollars in assets. We take that responsibility seriously.</p>
                    <ul>
                        <li className='my-2'><b>FMCSA Compliance:</b> We only partner with carriers who maintain active authority and clean safety records.</li>
                        <li className='my-2'><b>Cargo Insurance:</b> Every carrier in our network is verified to have sufficient cargo coverage ($100,000 to $250,000 standard, with boosters available for highline inventory).</li>
                        <li className='my-2'><b>Claims Assistance:</b> In the rare event of damage, our internal claims department handles the process on your behalf, ensuring you are made whole quickly so you can retail the vehicle.</li>
                    </ul>

                    <h2 className='heading-2 mb-6 mt-4'>We Are Your Logistics Partner</h2>
                    <p className='my-2'>There is a difference between a broker and a partner. A broker wants to move a car; a partner wants to help you grow your dealership.</p>
                    <p className='my-2'>When we handle your <Link className='font-bold text-brand-500' href=''>dealer trade transport</Link>, we represent you. Our drivers understand that when they deliver a car to your customer’s driveway or your showroom floor, they are a reflection of your brand. Professionalism, courtesy, and clean equipment are non-negotiable.</p>

                    <h3 className="text-4xl my-4 font-semibold text-gray-900">Who We Serve:</h3>
                    <ul>
                        <li className='my-2'><b>Franchise Dealerships:</b> Ford, Chevy, Toyota, BMW, and Mercedes-Benz stores requiring timely inventory replenishment.</li>
                        <li className='my-2'><b>Independent Dealers:</b> High-volume used car lots focusing on fast turnover.</li>
                        <li className='my-2'><b>Dealer Groups:</b> Large conglomerates needing centralized logistics for 10+ locations.</li>
                        <li className='my-2'><b>Wholesalers:</b> Buyers flipping cars between auction lanes for profit.</li>
                    </ul>

                    <h2 className='heading-2 mb-6 mt-4'>Ready to Accelerate Your Inventory Turn?</h2>
                    <p className='my-2'>Stop letting logistics dictate your sales cycle. With <b>Furious Auto Shipping</b>, you get a dedicated team of experts committed to lowering your per-unit shipping costs and increasing your inventory speed.</p>
                    <p className='my-2'>Whether you need <b>Adesa transport rates</b> for a single unit or a recurring contract for 50 cars a month, we have the capacity to handle it.</p>
                </div>

            </section>

            <Link className='font-bold text-brand-500'Page />

            <FAQ
                title="Dealer Auto Transport FAQ"
                subtitle="Common questions about our dealer auto transport services"
                faqs={faqs} />
        </>
    )
}

export default ComponentName
