import { Clock, AlertTriangle, XCircle, CheckCircle, Car, FileText, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";

export default function DriveTestInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-xds-gray mb-4">
            Victorian <span className="text-xds-orange">Drive Test</span> Information
          </h1>
          <p className="text-xl text-xds-gray/70 max-w-3xl mx-auto">
            Everything you need to know about the Victorian driving test, including stages, requirements, and critical errors to avoid.
          </p>
        </div>

        {/* VicRoads Address & Hours - Frankston Focus */}
        <Card className="p-8 mb-8 bg-white shadow-lg border-l-4 border-xds-orange">
          <h2 className="text-2xl font-bold text-xds-gray mb-6">VicRoads Frankston Testing Center</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-xds-orange mr-3 mt-1" />
                <div>
                  <p className="font-medium text-xds-gray">Address</p>
                  <p className="text-xds-gray/70">397-421 Nepean Hwy, Frankston VIC 3199</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-xds-orange mr-3 mt-1" />
                <div>
                  <p className="font-medium text-xds-gray">Opening Hours</p>
                  <div className="text-xds-gray/70 text-sm space-y-1">
                    <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                    <p>Saturday: 8:30 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-xds-red font-medium">Closed on public holidays</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-xds-gray mb-3">Services Available</h3>
              <ul className="space-y-2 text-sm text-xds-gray/70">
                <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Learner permit tests</li>
                <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Probationary license tests</li>
                <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Full license upgrades</li>
                <li><CheckCircle className="w-4 h-4 text-xds-green inline mr-2" />Overseas license assessments</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Pre-Drive Safety Check */}
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-xds-orange mb-6">Pre-Drive Safety Check</h2>
          <p className="text-xds-gray mb-6">Before starting your drive test, you must demonstrate knowledge of vital vehicle controls:</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xds-gray mb-4 text-lg flex items-center">
                <Car className="w-5 h-5 mr-2 text-xds-orange" />
                OPERATE
              </h3>
              <ul className="space-y-2 text-xds-gray/80">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Indicators
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Brake Lights
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Hazard (Emergency) Lights
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Headlights
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Washer and Wipers
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xds-gray mb-4 text-lg flex items-center">
                <FileText className="w-5 h-5 mr-2 text-xds-orange" />
                POINT OUT
              </h3>
              <ul className="space-y-2 text-xds-gray/80">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Horn
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Handbrake
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Front Demister
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-xds-green mr-2" />
                  Rear Demister
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Test Stages */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Stage 1 */}
          <Card className="p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-xds-green mb-4">Stage 1</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-xds-orange mr-3" />
                <span className="text-xds-gray"><strong>Duration:</strong> 10 minutes</span>
              </div>
              <div className="flex items-center">
                <Car className="w-5 h-5 text-xds-orange mr-3" />
                <span className="text-xds-gray"><strong>Environment:</strong> Low risk</span>
              </div>
              <p className="text-xds-gray/80">
                Simple driving tasks in a controlled environment. It involves pretty simple driving tasks conducted in a low risk environment. You must pass Stage 1 to continue to Stage 2.
              </p>
              <div className="bg-xds-green/5 border-l-4 border-xds-green p-4 rounded">
                <p className="text-sm text-xds-gray">
                  <strong>Note:</strong> After Stage 1, the testing officer will ask you to find a safe place and pull over to calculate your scores.
                </p>
              </div>
            </div>
          </Card>

          {/* Stage 2 */}
          <Card className="p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-xds-green mb-4">Stage 2</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-xds-orange mr-3" />
                <span className="text-xds-gray"><strong>Duration:</strong> 20 minutes</span>
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-xds-orange mr-3" />
                <span className="text-xds-gray"><strong>Environment:</strong> Busy traffic</span>
              </div>
              <p className="text-xds-gray/80">
                More challenging tasks in busy traffic conditions. It includes more challenging tasks conducted in a busy traffic atmosphere. Tests your ability to handle real-world driving situations.
              </p>
              <div className="bg-xds-orange/5 border-l-4 border-xds-orange p-4 rounded">
                <p className="text-sm text-xds-gray">
                  <strong>Important:</strong> Only accessible after successfully completing Stage 1.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Critical Errors */}
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-xds-red mb-6">Critical Errors</h2>
          <div className="bg-xds-red/5 border-l-4 border-xds-red p-4 mb-6 rounded">
            <p className="text-xds-gray">
              <strong>Test Termination:</strong> More than 1 critical error in Stage 1, OR more than 2 critical errors in the whole test.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-xds-gray/80">
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Too Slow
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Fail to Look
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Fail to Signal
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Block Pedestrian Crosswalk
              </li>
            </ul>
            <ul className="space-y-2 text-xds-gray/80">
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Mount Kerb
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Stall
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Incomplete Stop
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-xds-red mr-2" />
                Illegal Action
              </li>
            </ul>
          </div>
        </Card>

        {/* Immediate Termination Errors */}
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-xds-red mb-6">Immediate Termination Errors</h2>
          <div className="bg-xds-red/10 border-l-4 border-xds-red p-4 mb-6 rounded">
            <p className="text-xds-gray">
              <strong>Warning:</strong> Any of these errors will result in immediate test termination and dangerous action.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-xds-gray/80">
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Intervention
              </li>
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Disobey Direction
              </li>
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Collision
              </li>
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Fail to Give Way
              </li>
            </ul>
            <ul className="space-y-2 text-xds-gray/80">
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Excessive Speed
              </li>
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Stop at Dangerous Position
              </li>
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Fail to Stop
              </li>
              <li className="flex items-center">
                <XCircle className="w-4 h-4 text-xds-red mr-2" />
                Dangerous Action
              </li>
            </ul>
          </div>
        </Card>

        {/* Test Preparation */}
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-xds-gray mb-6">How We Prepare You for Success</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-xds-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-xds-orange" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">Route Familiarization</h3>
              <p className="text-sm text-xds-gray/70">
                Practice on actual test routes around VicRoads Frankston to build confidence and familiarity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-xds-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-xds-green" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">Pre-Drive Check Training</h3>
              <p className="text-sm text-xds-gray/70">
                Master all vehicle controls and safety checks required before your test begins.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-xds-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-xds-yellow" />
              </div>
              <h3 className="font-bold text-xds-gray mb-2">Error Prevention</h3>
              <p className="text-sm text-xds-gray/70">
                Learn to avoid critical and immediate termination errors through focused training.
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mb-12 py-12 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-xds-gray mb-4">
            Ready to Pass Your Driving Test?
          </h2>
          <p className="text-xl text-xds-gray/70 mb-8 max-w-2xl mx-auto">
            Book your Test Day Package today and get comprehensive preparation for your Victorian driving test.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0434538142">
              <Button className="bg-xds-green hover:bg-xds-green/90 text-white px-8 py-3">
                Call Now: 0434 538 142
              </Button>
            </a>
            <a href="#contact">
              <Button className="bg-xds-orange hover:bg-xds-orange/90 text-white px-8 py-3">
                Book Test Package
              </Button>
            </a>
          </div>
        </div>

        {/* FAQ Section - Test Related */}
        <FAQSection category="test" title="Drive Test FAQ" maxItems={6} />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
