import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Eye, EyeOff, User, Mail, Phone, Building, MapPin, Briefcase, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const departments = [
  "State Bank of India", "Punjab National Bank", "Bank of Baroda",
  "Canara Bank", "Union Bank of India", "Bank of India", "Indian Bank",
  "Central Bank of India", "Indian Overseas Bank", "UCO Bank",
  "LIC of India", "New India Assurance", "Oriental Insurance",
  "United India Insurance", "National Insurance Company"
];

const designations = [
  "Clerk", "Officer Scale I", "Officer Scale II", "Officer Scale III",
  "Manager", "Senior Manager", "Chief Manager", "Assistant General Manager",
  "Deputy General Manager", "General Manager", "Development Officer",
  "Administrative Officer", "Assistant"
];

const Transfer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    district: "",
    state: "",
    role: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.designation) newErrors.designation = "Please select a designation";
    if (!formData.state) newErrors.state = "Please select a state";
    if (!formData.department) newErrors.department = "Please select a department";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Transfer request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        district: "",
        state: "",
        role: "",
        department: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Please fill all required fields correctly");
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      district: "",
      state: "",
      role: "",
      department: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Transfer"/>
        <ServiceBlocks />

        <BackgroundPattern className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Name*
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className={`border-2 ${errors.name ? 'border-destructive' : 'border-border'} focus:border-primary`}
                    />
                    {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Enter your Phone No
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      placeholder="Enter your phone number"
                      className={`border-2 ${errors.phone ? 'border-destructive' : 'border-border'} focus:border-primary`}
                    />
                    {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className={`border-2 ${errors.email ? 'border-destructive' : 'border-border'} focus:border-primary`}
                    />
                    {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                  </div>

                  {/* Designation */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      Designation*
                    </Label>
                    <Select value={formData.designation} onValueChange={(value) => setFormData({ ...formData, designation: value })}>
                      <SelectTrigger className={`border-2 ${errors.designation ? 'border-destructive' : 'border-border'}`}>
                        <SelectValue placeholder="Enter your Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {designations.map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.designation && <p className="text-destructive text-sm">{errors.designation}</p>}
                  </div>

                  {/* District */}
                  <div className="space-y-2">
                    <Label htmlFor="district" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      District*
                    </Label>
                    <Input
                      id="district"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="Enter your district"
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      State*
                    </Label>
                    <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                      <SelectTrigger className={`border-2 ${errors.state ? 'border-destructive' : 'border-border'}`}>
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.state && <p className="text-destructive text-sm">{errors.state}</p>}
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <Label htmlFor="role" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Role
                    </Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Enter your role"
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Department */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary" />
                      Department*
                    </Label>
                    <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                      <SelectTrigger className={`border-2 ${errors.department ? 'border-destructive' : 'border-border'}`}>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.department && <p className="text-destructive text-sm">{errors.department}</p>}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Password*
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Enter password"
                        className={`border-2 pr-10 ${errors.password ? 'border-destructive' : 'border-border'} focus:border-primary`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-destructive text-sm">{errors.password}</p>}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Confirm Password*
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="Confirm password"
                        className={`border-2 pr-10 ${errors.confirmPassword ? 'border-destructive' : 'border-border'} focus:border-primary`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-destructive text-sm">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleCancel}
                    className="px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="px-8 bg-primary hover:bg-primary/90"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </BackgroundPattern>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Transfer;
