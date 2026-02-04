import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, User, Users, Search, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { committeeCategories, getTotalMembers } from "@/data/committeeData";

const CommitteeSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<{ categoryIndex: number; memberIndex: number } | null>(null);

  const totalMembers = getTotalMembers();

  // Filter members based on search
  const filteredCategories = committeeCategories.map(category => ({
    ...category,
    members: category.members.filter(member => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.state.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.members.length > 0);

  const handleMemberClick = (categoryIndex: number, memberIndex: number) => {
    if (selectedMember?.categoryIndex === categoryIndex && selectedMember?.memberIndex === memberIndex) {
      setSelectedMember(null);
    } else {
      setSelectedMember({ categoryIndex, memberIndex });
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-3 sm:mb-4">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <span className="font-heading font-bold text-lg sm:text-xl text-primary">
            {totalMembers} Members
          </span>
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
          Central Executive Committee
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
          2023 - 2026 | Our association is led by dedicated members across various categories,
          working together for the welfare of all SC/ST employees.
        </p>
      </motion.div>

      {/* Search */}
      <div className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search members by name, zone, or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 sm:pl-10 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Category Accordions */}
      <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
        {filteredCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.05 }}
            className="rounded-lg sm:rounded-xl overflow-hidden shadow-card bg-background"
          >
            {/* Category Header */}
            <button
              onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
              className={`w-full flex items-center justify-between p-3 sm:p-4 ${category.color} text-white transition-all duration-300 hover:opacity-90`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-heading font-bold text-sm sm:text-base md:text-lg">{category.title}</span>
                <span className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                  {category.members.length} {category.members.length === 1 ? 'member' : 'members'}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </button>

            {/* Members List */}
            <AnimatePresence>
              {expandedCategory === categoryIndex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 sm:p-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto bg-background">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                      {category.members.map((member, memberIndex) => {
                        const isSelected = selectedMember?.categoryIndex === categoryIndex && selectedMember?.memberIndex === memberIndex;
                        
                        return (
                          <motion.div
                            key={memberIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: memberIndex * 0.02 }}
                            onClick={() => handleMemberClick(categoryIndex, memberIndex)}
                            className={`rounded-lg p-2 sm:p-3 cursor-pointer transition-all duration-300 ${
                              isSelected 
                                ? 'bg-primary/10 ring-2 ring-primary shadow-lg' 
                                : 'bg-muted/50 hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${category.color} flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0 shadow-md overflow-hidden border-2 border-white`}>
                                <img 
                                  src={member.photo} 
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-xs sm:text-sm text-foreground truncate">
                                  {member.name}
                                </h4>
                                <p className="text-[10px] sm:text-xs text-primary truncate font-medium">
                                  {member.zone}
                                </p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                                  {member.state}
                                </p>
                              </div>
                            </div>

                            {/* Expanded Details */}
                            <AnimatePresence>
                              {isSelected && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border"
                                >
                                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                                    {member.srNo && (
                                      <div className="flex items-center gap-2 text-muted-foreground">
                                        <span className="font-medium">SR No:</span>
                                        <span>{member.srNo}</span>
                                      </div>
                                    )}
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                      <span className="truncate">{member.zone}, {member.state}</span>
                                    </div>
                                    {member.contact && (
                                      <div className="flex items-center gap-2">
                                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                                        <a 
                                          href={`tel:${member.contact}`}
                                          className="text-primary hover:underline font-medium truncate"
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          {member.contact}
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeSection;
