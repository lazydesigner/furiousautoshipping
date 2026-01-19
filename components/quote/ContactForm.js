import { UserIcon, PhoneIcon, EnvelopeIcon, TagIcon } from '@heroicons/react/24/outline'
const formatUSPhone = (value) => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '').slice(0, 10);

  const len = digits.length;

  if (len === 0) return '';
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export default function ContactForm({ register, errors }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600">
          We'll use this information to send your quote and coordinate your shipment
        </p>
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="form-label">
            <UserIcon className="h-4 w-4 inline mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            {...register('name')}
            className="form-input"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="form-error">{errors.name.message}</p>
          )}
          <p className="form-help">
            Enter the name of the person responsible for the shipment
          </p>
        </div>

        {/* Phone and Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">
              <PhoneIcon className="h-4 w-4 inline mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('phone', {
                onChange: (e) => {
                  e.target.value = formatUSPhone(e.target.value);
                }
              })}
              className="form-input"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="form-error">{errors.phone.message}</p>
            )}
            <p className="form-help">
              We'll call to confirm pickup details
            </p>
          </div>

          <div>
            <label className="form-label">
              <EnvelopeIcon className="h-4 w-4 inline mr-1" />
              Email Address *
            </label>
            <input
              type="email"
              {...register('email')}
              className="form-input"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
            <p className="form-help">
              Quote confirmation will be sent here
            </p>
          </div>
        </div>

        {/* Promo Code */}
        <div>
          <label className="form-label">
            <TagIcon className="h-4 w-4 inline mr-1" />
            Promo Code (Optional)
          </label>
          <input
            type="text"
            {...register('promoCode')}
            className="form-input"
            placeholder="Enter promo code if you have one"
          />
          <p className="form-help">
            Have a discount code? Enter it here to save on your shipment
          </p>
        </div>

        {/* Contact Preferences */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Communication Preferences</h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">
                Send me email updates about my shipment
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">
                Text me important shipment notifications
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">
                Send me promotional offers and auto transport tips
              </span>
            </label>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-900">
                Important Information
              </h4>
              <div className="text-sm text-blue-700 mt-1 space-y-1">
                <p>• You'll receive a quote confirmation within 2-4 hours</p>
                <p>• Our team will contact you to finalize details and assign a carrier</p>
                <p>• Keep your phone accessible for carrier coordination</p>
                <p>• Quote is valid for 7 days from submission</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}