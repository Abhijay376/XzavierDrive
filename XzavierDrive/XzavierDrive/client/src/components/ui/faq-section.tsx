import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { faqs, type FAQ } from "@/data/faq";

interface FAQSectionProps {
  category?: string;
  title?: string;
  maxItems?: number;
}

export const FAQSection = ({ 
  category, 
  title = "Frequently Asked Questions",
  maxItems 
}: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFAQs = category 
    ? faqs.filter(faq => faq.category === category)
    : faqs;
    
  const displayFAQs = maxItems 
    ? filteredFAQs.slice(0, maxItems)
    : filteredFAQs;

  const toggleFAQ = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-xds-gray mb-4">
            {title}
          </h2>
          <p className="text-xl text-xds-gray/70 max-w-2xl mx-auto">
            Common questions about learning to drive in Victoria
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {displayFAQs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg font-semibold text-xds-gray pr-4">
                  {faq.question}
                </h3>
                {openItems.has(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-xds-orange flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-xds-orange flex-shrink-0" />
                )}
              </button>
              
              {openItems.has(faq.id) && (
                <div className="px-6 pb-6">
                  <p className="text-xds-gray/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
