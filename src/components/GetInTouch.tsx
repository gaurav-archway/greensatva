import { Mail, Phone, MapPin } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section id="contact" className="py-16 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-2">
          Get In Touch
        </h2>

        {/* Decorative Line Below Title */}
        <div className="flex items-center justify-center mb-12">
          <span className="w-12 h-[2px] bg-green-800"></span>
          <i className="fa fa-leaf text-green-800 mx-2 text-sm"></i>
          <span className="w-12 h-[2px] bg-green-800"></span>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600 mt-1">
                    Malkhed, Panshet Road, Pune, Maharashtra, 411042
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600 mt-1">
                    +91 9822300437 / 8983602323 / 7038331904
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600 mt-1">
                    agri@greensatva.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
