import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Car, Truck, Bike, Shield, Package } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const QuoteForm = () => {
  const [phone, setPhone] = useState("");
  const [pickupZip, setPickupZip] = useState("");
  const [deliveryZip, setDeliveryZip] = useState("");
  const [carType, setCarType] = useState("");
  const [transportDate, setTransportDate] = useState("asap");
  const [customDate, setCustomDate] = useState<Date>();
  const [trailerType, setTrailerType] = useState("open");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!phone || !pickupZip || !deliveryZip || !carType) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Collect form data
    const formData = {
      phone,
      pickupZip,
      deliveryZip,
      carType,
      transportDate: transportDate === "custom" && customDate ? format(customDate, "PPP") : transportDate,
      trailerType
    };

    console.log("Quote Request:", formData);
    toast.success("Quote request submitted! We'll contact you shortly.");
    
    // Reset form
    setPhone("");
    setPickupZip("");
    setDeliveryZip("");
    setCarType("");
    setTransportDate("asap");
    setCustomDate(undefined);
    setTrailerType("open");
  };

  const carTypes = [
    { value: "sedan", label: "Sedan", icon: Car },
    { value: "suv", label: "SUV", icon: Truck },
    { value: "pickup", label: "Pickup", icon: Truck },
    { value: "coupe", label: "Coupe", icon: Car },
    { value: "motorcycle", label: "Motorcycle", icon: Bike },
  ];

  return (
    <section id="quote" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Get Your Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you with a competitive quote
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border card-glow space-y-8">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-input border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickup" className="text-foreground">Pickup Zip *</Label>
                <Input
                  id="pickup"
                  type="text"
                  placeholder="90210"
                  value={pickupZip}
                  onChange={(e) => setPickupZip(e.target.value)}
                  required
                  className="bg-input border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery" className="text-foreground">Delivery Zip *</Label>
                <Input
                  id="delivery"
                  type="text"
                  placeholder="10001"
                  value={deliveryZip}
                  onChange={(e) => setDeliveryZip(e.target.value)}
                  required
                  className="bg-input border-border focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Car Type */}
            <div className="space-y-4">
              <Label className="text-foreground text-lg">Vehicle Type *</Label>
              <Select value={carType} onValueChange={setCarType} required>
                <SelectTrigger className="w-full bg-input border-border focus:border-primary">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border z-50">
                  {carTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value} className="focus:bg-accent/10">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-primary" />
                          <span>{type.label}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Transport Date */}
            <div className="space-y-4">
              <Label className="text-foreground text-lg">Transport Date *</Label>
              <RadioGroup value={transportDate} onValueChange={setTransportDate} className="space-y-3">
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="asap" id="asap" className="border-border" />
                  <Label htmlFor="asap" className="cursor-pointer flex-1">ASAP</Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="7days" id="7days" className="border-border" />
                  <Label htmlFor="7days" className="cursor-pointer flex-1">In 7 Days</Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors relative">
                  <RadioGroupItem value="custom" id="custom" className="border-border" />
                  <Label htmlFor="custom" className="cursor-pointer flex-1">Custom Date</Label>
                  {transportDate === "custom" && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-start text-left font-normal bg-input border-border"
                        >
                          <CalendarIcon className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-popover border-border z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={customDate}
                          onSelect={setCustomDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </RadioGroup>
            </div>

            {/* Trailer Type */}
            <div className="space-y-4">
              <Label className="text-foreground text-lg">Trailer Type *</Label>
              <RadioGroup value={trailerType} onValueChange={setTrailerType} className="grid md:grid-cols-2 gap-4">
                <div className="relative p-6 rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer group">
                  <RadioGroupItem value="open" id="open" className="absolute top-4 right-4" />
                  <Label htmlFor="open" className="cursor-pointer space-y-2">
                    <Package className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="font-semibold text-lg">Open Trailer</div>
                    <div className="text-sm text-muted-foreground">Most economical option</div>
                  </Label>
                </div>
                <div className="relative p-6 rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer group">
                  <RadioGroupItem value="enclosed" id="enclosed" className="absolute top-4 right-4" />
                  <Label htmlFor="enclosed" className="cursor-pointer space-y-2">
                    <Shield className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
                    <div className="font-semibold text-lg">Enclosed Trailer</div>
                    <div className="text-sm text-muted-foreground">Maximum protection</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-lg py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
            >
              Get My Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
