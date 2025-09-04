
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Contact Us" subtitle="We'd Love to Hear From You" />
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (Optional)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
             <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Location</h3>
                 <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086395279234!2d-122.41941548468153!3d37.77492957975842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d7c6b391%3A0x868b81a7b0559098!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1628894981445!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="rounded-md"
                    ></iframe>
                </div>
                <div className="mt-6 text-gray-600">
                    <p><strong>Address:</strong> 123 University Drive, San Francisco, CA 94102</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> admissions@univera.edu</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
