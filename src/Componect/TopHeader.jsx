import { Mail, UserPlus, LogIn } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#c9a46a] text-white text-sm hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href="mailto:support@nebulafinserv.com" className="cursor-pointer hover:underline">
            support@nebulafinserv.com
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-1 cursor-pointer hover:underline">
            <UserPlus size={16} />
            Open Real Account
          </a>

          <a href="#" className="flex items-center gap-1 cursor-pointer hover:underline">
            <UserPlus size={16} />
            Open Demo Account
          </a>

          <a href="#" className="flex items-center gap-1 cursor-pointer hover:underline">
            <LogIn size={16} />
            Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;
