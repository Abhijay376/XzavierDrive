import { useState } from "react";
import { useParams, Link } from "wouter";
import { Star, Phone, Car, Users, Tag, CheckCircle, MapPin, Clock, Award, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchBar } from "@/components/ui/search-bar";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { customerReviews } from "@/data/reviews";
import { southEastSuburbs, type Suburb } from "@/data/suburbs";

export default function SuburbSEO() {
  const params = useParams();
  const suburbSlug = params.suburb;
  const [selectedSuburb, setSelectedSuburb] = useState<Suburb | null>(null);
  
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

  const handleSuburbSelect = (selectedSub: Suburb) => {
    setSelectedSuburb(selectedSub);
    // Navigate to suburb detail page
    window.location.href = `/suburb/${selectedSub.name.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section - Customized for Suburb */}
      <section className="bg-gradient-to-r from-xds-orange/5 to-xds-yellow/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-xds-gray mb-6">
              Driving Lessons <span className="text-xds-orange">{suburb.name}</span>
            </h1>
            <p className="text-xl text-xds-gray/80 mb-8 max-w-2xl mx-auto">
              Learn to drive in {suburb.name} {suburb.postcode} with Melbourne's most experienced instructors. Professional door-to-door driving lessons with guaranteed results.
            </p>

            {/* Suburb Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray text-sm">Location</p>
                    <p className="text-xds-gray/70 text-sm">{suburb.name} {suburb.postcode}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Navigation className="w-5 h-5 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray text-sm">Nearest VicRoads</p>
                    <p className="text-xds-gray/70 text-sm">{suburb.nearestVicRoads}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-xds-orange mr-3" />
                  <div>
                    <p className="font-medium text-xds-gray text-sm">Distance</p>
                    <p className="text-xds-gray/70 text-sm">{suburb.distance}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suburb Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-xds-gray mb-4">Find Other Suburbs</h3>
              <SearchBar onSuburbSelect={handleSuburbSelect} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0434538142">
                <Button className="bg-xds-green hover:bg-xds-green/90 text-white px-6 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 0434 538 142
                </Button>
              </a>
              <a 
                href="https://g.co/kgs/XajFr8D" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-xds-yellow hover:bg-xds-yellow/90 text-black px-6 py-3">
                  <Star className="w-4 h-4 mr-2" />
                  Read Our Reviews
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section - Same as home */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-xds-gray mb-4">Driving Lessons in {suburb.name} - Pricing</h2>
            <p className="text-xl text-xds-gray/70 max-w-2xl mx-auto">Professional driving instruction with door-to-door service in {suburb.name}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individual Lessons */}
            <Card className="p-8 border-t-4 border-xds-yellow">
              <div className="text-center">
                <div className="bg-xds-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="text-xds-yellow text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-xds-gray mb-2">Individual Lessons</h3>
                <div className="text-3xl font-bold text-xds-orange mb-4">$65<span className="text-lg text-xds-gray/60">/hour</span></div>
                <ul className="text-left text-xds-gray/80 space-y-2 mb-6">
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Professional instructor</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Pickup from {suburb.name}</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Modern dual-control vehicle</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Flexible scheduling</li>
                </ul>
                <Button className="w-full bg-xds-yellow text-black hover:bg-xds-yellow/90">
                  Book Now
                </Button>
              </div>
            </Card>

            {/* Package Deals */}
            <Card className="p-8 border-t-4 border-xds-green relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-xds-green text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <div className="bg-xds-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-xds-green text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-xds-gray mb-2">Lesson Packages</h3>
                <div className="text-3xl font-bold text-xds-orange mb-4">$300<span className="text-lg text-xds-gray/60">/5 hours</span></div>
                <ul className="text-left text-xds-gray/80 space-y-2 mb-6">
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Save $25 per package</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Priority booking</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Progress tracking</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Local route practice</li>
                </ul>
                <Button className="w-full bg-xds-green text-white hover:bg-xds-green/90">
                  Book Package
                </Button>
              </div>
            </Card>

            {/* Test Day Package */}
            <Card className="p-8 border-t-4 border-xds-red">
              <div className="text-center">
                <div className="bg-xds-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="text-xds-red text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-xds-gray mb-2">Test Day Package</h3>
                <div className="text-3xl font-bold text-xds-orange mb-4">$150<span className="text-lg text-xds-gray/60">/test</span></div>
                <ul className="text-left text-xds-gray/80 space-y-2 mb-6">
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />45min pre-test lesson</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Use instructor's car</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Test at {suburb.nearestVicRoads}</li>
                  <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Pass guarantee*</li>
                </ul>
                <Button className="w-full bg-xds-red text-white hover:bg-xds-red/90">
                  Book Test
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-xds-gray mb-4">Why Choose Us in {suburb.name}?</h2>
            <p className="text-xl text-xds-gray/70 max-w-2xl mx-auto">Local expertise with proven results in your area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-xds-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-xds-orange" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">Local Knowledge</h3>
              <p className="text-sm text-xds-gray/70">Familiar with {suburb.name} roads and routes to {suburb.nearestVicRoads}</p>
            </div>

            <div className="text-center">
              <div className="bg-xds-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-xds-green" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">Door-to-Door Service</h3>
              <p className="text-sm text-xds-gray/70">Convenient pickup and drop-off anywhere in {suburb.name}</p>
            </div>

            <div className="text-center">
              <div className="bg-xds-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-xds-yellow" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">85%+ Pass Rate</h3>
              <p className="text-sm text-xds-gray/70">High success rate for students from {suburb.name} area</p>
            </div>

            <div className="text-center">
              <div className="bg-xds-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-xds-red" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-xds-gray/70">7 days a week availability to fit your {suburb.name} schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-xds-gray mb-4">Students from {suburb.name} Love Us</h2>
            <p className="text-xl text-xds-gray/70 max-w-2xl mx-auto">Read reviews from successful students in your area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customerReviews.slice(0, 3).map((review) => (
              <Card key={review.id} className="p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-xds-yellow flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-xds-gray/70">{review.rating}.0</span>
                </div>
                <p className="text-xds-gray mb-4 italic">"{review.text}"</p>
                <div className="font-medium text-xds-gray">{review.name}</div>
                <div className="text-sm text-xds-gray/60">{review.location}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://g.co/kgs/XajFr8D" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-xds-green hover:bg-xds-green/90 text-white">
                <Star className="w-4 h-4 mr-2" />
                Read All Reviews on Google
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection maxItems={6} title={`Driving Lessons FAQ - ${suburb.name}`} />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}