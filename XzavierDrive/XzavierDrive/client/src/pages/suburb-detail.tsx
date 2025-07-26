import { useParams, Link } from "wouter";
import { MapPin, Navigation, Clock, Phone, Car, Award, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { southEastSuburbs } from "@/data/suburbs";

export default function SuburbDetail() {
  const params = useParams();
  const suburbSlug = params.suburb;
  
  const suburb = southEastSuburbs.find(
    s => s.name.toLowerCase().replace(/\s+/g, '-') === suburbSlug
  );

  if (!suburb) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-xds-gray mb-4">Suburb Not Found</h1>
          <p className="text-xds-gray/70 mb-6">The suburb you're looking for doesn't exist in our service area.</p>
          <Link href="/suburbs">
            <Button className="bg-xds-orange hover:bg-xds-orange/90 text-white">
              View All Suburbs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/suburbs" className="inline-flex items-center text-xds-orange hover:text-xds-orange/80 transition">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Suburbs
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-xds-gray mb-4">
            Driving Lessons in <span className="text-xds-orange">{suburb.name}</span>
          </h1>
          <p className="text-xl text-xds-gray/70 max-w-3xl mx-auto">
            Professional driving instruction in {suburb.name} {suburb.postcode}. Door-to-door service with experienced instructors.
          </p>
        </div>

        {/* Suburb Information */}
        <Card className="p-8 mb-12 bg-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-xds-gray mb-6">Suburb Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray">Location</p>
                    <p className="text-xds-gray/70">{suburb.name}, VIC {suburb.postcode}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Navigation className="w-6 h-6 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray">Nearest VicRoads</p>
                    <p className="text-xds-gray/70">{suburb.nearestVicRoads}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray">Distance to Test Center</p>
                    <p className="text-xds-gray/70">{suburb.distance}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray">Region</p>
                    <p className="text-xds-gray/70">{suburb.region}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-xds-gray mb-6">Our Services in {suburb.name}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="w-5 h-5 text-xds-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-xds-gray">Door-to-Door Pickup</p>
                    <p className="text-sm text-xds-gray/70">We pick you up and drop you off anywhere in {suburb.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-xds-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-xds-gray">Local Route Knowledge</p>
                    <p className="text-sm text-xds-gray/70">Familiar with local roads and test routes to {suburb.nearestVicRoads}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-xds-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-xds-gray">Flexible Scheduling</p>
                    <p className="text-sm text-xds-gray/70">Lessons available 7 days a week to fit your schedule</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-xds-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-xds-gray">Easy Booking</p>
                    <p className="text-sm text-xds-gray/70">Call 0434 538 142 or book online today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* VicRoads Information */}
        <Card className="p-8 mb-12 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-xds-gray mb-6">VicRoads Testing Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-xds-gray mb-4">Your Testing Center</h3>
              <div className="bg-xds-orange/5 border-l-4 border-xds-orange p-4 rounded">
                <p className="font-medium text-xds-gray">{suburb.nearestVicRoads}</p>
                <p className="text-sm text-xds-gray/70 mt-1">Distance: {suburb.distance} from {suburb.name}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-xds-gray mb-4">Test Preparation</h3>
              <ul className="space-y-2 text-sm text-xds-gray/70">
                <li>• Route familiarization training</li>
                <li>• Practice on local roads and conditions</li>
                <li>• Pre-test warm-up lessons</li>
                <li>• Use of instructor's vehicle for test</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Pricing */}
        <Card className="p-8 mb-12 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-xds-gray mb-6">Pricing for {suburb.name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-xds-yellow rounded-lg">
              <Car className="w-12 h-12 text-xds-yellow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-xds-gray mb-2">Individual Lesson</h3>
              <p className="text-2xl font-bold text-xds-orange mb-4">$65/hour</p>
              <p className="text-sm text-xds-gray/70">Includes pickup and drop-off in {suburb.name}</p>
            </div>
            
            <div className="text-center p-6 border border-xds-green rounded-lg">
              <Award className="w-12 h-12 text-xds-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-xds-gray mb-2">5-Hour Package</h3>
              <p className="text-2xl font-bold text-xds-orange mb-4">$300</p>
              <p className="text-sm text-xds-gray/70">Save $25 - Best value for multiple lessons</p>
            </div>
            
            <div className="text-center p-6 border border-xds-red rounded-lg">
              <Phone className="w-12 h-12 text-xds-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-xds-gray mb-2">Test Day Package</h3>
              <p className="text-2xl font-bold text-xds-orange mb-4">$150</p>
              <p className="text-sm text-xds-gray/70">Includes pre-test lesson and vehicle hire</p>
            </div>
          </div>
        </Card>

        {/* Quick Booking */}
        <div className="text-center mb-12 py-12 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-xds-gray mb-4">
            Ready to Start Learning in {suburb.name}?
          </h2>
          <p className="text-xl text-xds-gray/70 mb-8 max-w-2xl mx-auto">
            Book your first driving lesson today and join hundreds of successful students who passed their test with Xzavier Driving School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0434538142">
              <Button className="bg-xds-green hover:bg-xds-green/90 text-white px-8 py-3">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 0434 538 142
              </Button>
            </a>
            <a href="#contact">
              <Button className="bg-xds-orange hover:bg-xds-orange/90 text-white px-8 py-3">
                Book Online
              </Button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
