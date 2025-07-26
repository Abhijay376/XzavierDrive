import { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { searchSuburbs, type Suburb } from "@/data/suburbs";
import { Link } from "wouter";

interface SearchBarProps {
  onSuburbSelect?: (suburb: Suburb) => void;
  placeholder?: string;
  showResults?: boolean;
}

export const SearchBar = ({ 
  onSuburbSelect, 
  placeholder = "Enter postcode or suburb name...",
  showResults = true 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Suburb[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = searchSuburbs(query);
      setResults(searchResults.slice(0, 8)); // Limit to 8 results
      setShowDropdown(searchResults.length > 0 && showResults);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query, showResults]);

  const handleSuburbClick = (suburb: Suburb) => {
    setQuery(`${suburb.name} ${suburb.postcode}`);
    setShowDropdown(false);
    onSuburbSelect?.(suburb);
  };

  const handleSearch = () => {
    if (results.length > 0) {
      handleSuburbClick(results[0]);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-xds-orange focus:ring-2 focus:ring-xds-orange/20 outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          
          {/* Search Results Dropdown */}
          {showDropdown && (
            <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-64 overflow-y-auto">
              {results.map((suburb) => (
                <button
                  key={`${suburb.name}-${suburb.postcode}`}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  onClick={() => handleSuburbClick(suburb)}
                >
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-xds-orange mr-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-xds-gray">
                        {suburb.name} {suburb.postcode}
                      </div>
                      <div className="text-sm text-gray-500">
                        Nearest VicRoads: {suburb.nearestVicRoads}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </Card>
          )}
        </div>
        
        <Button 
          onClick={handleSearch}
          className="bg-xds-orange text-white px-6 py-3 rounded-lg hover:bg-xds-orange/90 transition font-medium"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};
