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
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
          <Users className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-xl text-primary">
            {totalMembers} Members
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Central Executive Committee
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          2023 - 2026 | Our association is led by dedicated members across various categories,
          working together for the welfare of all SC/ST employees.
        </p>
      </motion.div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search members by name, zone, or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Accordions */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.05 }}
            className="rounded-xl overflow-hidden shadow-card bg-background"
          >
            {/* Category Header */}
            <button
              onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
              className={`w-full flex items-center justify-between p-4 ${category.color} text-white transition-all duration-300 hover:opacity-90`}
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5" />
                <span className="font-heading font-bold text-lg">{category.title}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {category.members.length} {category.members.length === 1 ? 'member' : 'members'}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
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
                  <div className="p-4 max-h-[500px] overflow-y-auto bg-background">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.members.map((member, memberIndex) => {
                        const isSelected = selectedMember?.categoryIndex === categoryIndex && selectedMember?.memberIndex === memberIndex;
                        
                        return (
                          <motion.div
                            key={memberIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: memberIndex * 0.02 }}
                            onClick={() => handleMemberClick(categoryIndex, memberIndex)}
                            className={`rounded-lg p-3 cursor-pointer transition-all duration-300 ${
                              isSelected 
                                ? 'bg-primary/10 ring-2 ring-primary shadow-lg' 
                                : 'bg-muted/50 hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md`}>
                                {member.name.charAt(0)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm text-foreground truncate">
                                  {member.name}
                                </h4>
                                <p className="text-xs text-primary truncate font-medium">
                                  {member.zone}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
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
                                  className="mt-3 pt-3 border-t border-border"
                                >
                                  <div className="space-y-2 text-sm">
                                    {member.srNo && (
                                      <div className="flex items-center gap-2 text-muted-foreground">
                                        <span className="font-medium">SR No:</span>
                                        <span>{member.srNo}</span>
                                      </div>
                                    )}
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <MapPin className="w-4 h-4 text-primary" />
                                      <span>{member.zone}, {member.state}</span>
                                    </div>
                                    {member.contact && (
                                      <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-green-600" />
                                        <a 
                                          href={`tel:${member.contact}`}
                                          className="text-primary hover:underline font-medium"
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
