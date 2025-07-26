import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Navigation, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { southEastSuburbs, type Suburb } from "@/data/suburbs";

export default function Suburbs() {
  const [selectedSuburb, setSelectedSuburb] = useState<Suburb | null>(null);
  const [filteredSuburbs, setFilteredSuburbs] = useState<Suburb[]>(southEastSuburbs);

  const handleSuburbSelect = (suburb: Suburb) => {
    setSelectedSuburb(suburb);
  };

  const groupedSuburbs = filteredSuburbs.reduce((acc, suburb) => {
    if (!acc[suburb.region]) {
      acc[suburb.region] = [];
    }
    acc[suburb.region].push(suburb);
    return acc;
  }, {} as Record<string, Suburb[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-xds-gray mb-4">
            South East Melbourne <span className="text-xds-orange">Suburbs</span>
          </h1>
          <p className="text-xl text-xds-gray/70 max-w-3xl mx-auto mb-8">
            We service over 100 suburbs across South East Melbourne. Find your suburb and discover your nearest VicRoads testing center.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar onSuburbSelect={handleSuburbSelect} showResults={false} />
          </div>
        </div>

        {/* Selected Suburb Details */}
        {selectedSuburb && (
          <Card className="p-6 mb-8 bg-white shadow-lg border-l-4 border-xds-orange">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-xds-gray mb-2">
                  {selectedSuburb.name} {selectedSuburb.postcode}
                </h3>
                <div className="space-y-2 text-xds-gray/80">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-xds-orange" />
                    <span>Nearest VicRoads: {selectedSuburb.nearestVicRoads}</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="w-4 h-4 mr-2 text-xds-orange" />
                    <span>Distance: {selectedSuburb.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-xds-orange" />
                    <span>Region: {selectedSuburb.region}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Link href={`/suburb/${selectedSuburb.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button className="bg-xds-orange hover:bg-xds-orange/90 text-white">
                    View Suburb Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}

        {/* Suburbs by Region */}
        <div className="space-y-12">
          {Object.entries(groupedSuburbs).map(([region, suburbs]) => (
            <div key={region}>
              <h2 className="text-2xl font-bold text-xds-gray mb-6 flex items-center">
                <div className="w-1 h-8 bg-xds-orange mr-4"></div>
                {region}
                <span className="ml-3 text-lg font-normal text-xds-gray/60">
                  ({suburbs.length} suburbs)
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suburbs.map((suburb) => (
                  <Card key={`${suburb.name}-${suburb.postcode}`} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-xds-gray">
                          {suburb.name}
                        </h3>
                        <p className="text-xds-orange font-medium">{suburb.postcode}</p>
                      </div>
                      <MapPin className="w-5 h-5 text-xds-gray/40" />
                    </div>
                    
                    <div className="space-y-2 text-sm text-xds-gray/70 mb-4">
                      <div className="flex items-center">
                        <Navigation className="w-3 h-3 mr-2" />
                        <span>{suburb.nearestVicRoads}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-2" />
                        <span>{suburb.distance} away</span>
                      </div>
                    </div>
                    
                    <Link href={`/suburb/${suburb.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-xds-orange text-xds-orange hover:bg-xds-orange hover:text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-xds-gray mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-xds-gray/70 mb-8 max-w-2xl mx-auto">
            Book your first driving lesson today and join hundreds of successful students who passed their test with Xzavier Driving School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0434538142">
              <Button className="bg-xds-green hover:bg-xds-green/90 text-white px-8 py-3">
                Call Now: 0434 538 142
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-xds-orange text-xds-orange hover:bg-xds-orange hover:text-white px-8 py-3">
                Book Online
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
