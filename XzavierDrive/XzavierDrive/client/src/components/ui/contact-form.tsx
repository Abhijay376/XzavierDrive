import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Send, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Extend the contact schema for frontend form
const contactFormSchema = insertContactSchema.extend({
  name: insertContactSchema.shape.name.min(1, "Full name is required"),
  email: insertContactSchema.shape.email.email("Please enter a valid email address"),
  phone: insertContactSchema.shape.phone.min(10, "Please enter a valid phone number"),
  suburb: insertContactSchema.shape.suburb.min(1, "Please select a suburb"),
  licenseType: insertContactSchema.shape.licenseType.default("learner"),
  experience: insertContactSchema.shape.experience.default("beginner"),
  preferredTime: insertContactSchema.shape.preferredTime.default("weekdays"),
});

type ContactFormData = typeof contactFormSchema._type;

export const ContactForm = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      licenseType: "learner",
      experience: "beginner", 
      preferredTime: "weekdays"
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll contact you soon to schedule your first lesson.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const serviceAreas = [
    "Dandenong", "Noble Park", "Hallam", "Hampton Park",
    "Berwick", "Cranbourne", "Narre Warren", "Pakenham",
    "Frankston", "Carrum Downs", "Heatherton", "Springvale"
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-xds-gray mb-4">
            Contact Xzavier Driving School
          </h2>
          <p className="text-xl text-xds-gray/70 max-w-2xl mx-auto">
            Ready to start your driving journey? Get in touch today!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-xds-gray mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-xds-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-xds-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-xds-gray">Phone</p>
                    <a href="tel:0434538142" className="text-xds-gray/70 hover:text-xds-orange transition">
                      0434 538 142
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-xds-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-xds-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-xds-gray">Address</p>
                    <p className="text-xds-gray/70">124 Stud Rd, Dandenong VIC 3175</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-xds-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-xds-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-xds-gray">Operating Hours</p>
                    <p className="text-xds-gray/70">7 days a week, flexible scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div>
              <h3 className="text-xl font-bold text-xds-gray mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-xds-gray/70">
                {serviceAreas.map((area) => (
                  <div key={area}>• {area}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-bold text-xds-gray mb-6">Book Your First Lesson</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-xds-gray mb-2">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="focus:border-xds-orange focus:ring-xds-orange/20"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-xds-gray mb-2">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="focus:border-xds-orange focus:ring-xds-orange/20"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-xds-gray mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="focus:border-xds-orange focus:ring-xds-orange/20"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="suburb" className="text-sm font-medium text-xds-gray mb-2">
                  Suburb *
                </Label>
                <Input
                  id="suburb"
                  placeholder="Your pickup location"
                  {...register("suburb")}
                  className="focus:border-xds-orange focus:ring-xds-orange/20"
                />
                {errors.suburb && (
                  <p className="text-red-500 text-sm mt-1">{errors.suburb.message}</p>
                )}
              </div>

              <div>
                <Label className="text-sm font-medium text-xds-gray mb-2">
                  License Type *
                </Label>
                <Select 
                  defaultValue="learner"
                  onValueChange={(value) => setValue("licenseType", value)}
                >
                  <SelectTrigger className="focus:border-xds-orange focus:ring-xds-orange/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="learner">Learner's Permit</SelectItem>
                    <SelectItem value="probationary">Probationary (P1/P2)</SelectItem>
                    <SelectItem value="full">Full License</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-xds-gray mb-2">
                  Driving Experience *
                </Label>
                <Select 
                  defaultValue="beginner"
                  onValueChange={(value) => setValue("experience", value)}
                >
                  <SelectTrigger className="focus:border-xds-orange focus:ring-xds-orange/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete Beginner</SelectItem>
                    <SelectItem value="some">Some Experience</SelectItem>
                    <SelectItem value="test-ready">Nearly Test Ready</SelectItem>
                    <SelectItem value="test-failed">Failed Test Before</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-xds-gray mb-2">
                  Preferred Time *
                </Label>
                <Select 
                  defaultValue="weekdays"
                  onValueChange={(value) => setValue("preferredTime", value)}
                >
                  <SelectTrigger className="focus:border-xds-orange focus:ring-xds-orange/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="mornings">Mornings</SelectItem>
                    <SelectItem value="afternoons">Afternoons</SelectItem>
                    <SelectItem value="evenings">Evenings</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-xds-gray mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your driving experience and goals"
                  {...register("message")}
                  className="focus:border-xds-orange focus:ring-xds-orange/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-xds-orange text-white font-medium py-3 rounded-lg hover:bg-xds-orange/90 transition"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
