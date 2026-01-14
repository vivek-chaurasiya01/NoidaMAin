const OpportunitySection = () => {
  return (
    <section className="w-full bg-white pt-3 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* OPPORTUNITIES */}
          <div className="bg-[#b9935a] text-white p-14 animate-fadeIn  flex flex-col items-center justify-center text-center min-h-[320px]">
  {/* Image instead of icon */}
  <img 
    src="http://nebulafinserv.com/assets/img/opportunity.png" 
    alt="Opportunities" 
    className="w-50 h-50 mb-6 object-contain"
  />
  <h3 className="text-3xl font-semibold tracking-widest mb-4">
    OPPORTUNITIES
  </h3>
  <p className="text-xl leading-relaxed max-w-md">
    Nebula Financial Services Ltd Gives You An Opportunity To
    Take Part In Global Trading And Walk On The Path Of
    Organisational Growth And Progress.
  </p>
</div>


          {/* PLATFORM */}
          <div className="bg-black text-white animate-fadeIn  p-14 flex flex-col items-center justify-center text-center min-h-[320px]">
            {/* Image instead of icon */}
            <img 
              src="http://nebulafinserv.com/assets/img/platform.png" 
              alt="Platform" 
              className="w-50 h-50 mb-6 object-contain"
            />
            <h3 className="text-3xl font-semibold tracking-widest mb-4 text-[#d2aa73]">
              PLATFORM
            </h3>
            <p className="text-xl text-[#d2aa73] leading-relaxed max-w-md">
              Now You Can Get Superior Control Over Your Trading With
              Advanced Features And Trading Platform That Fulfils
              The Requirement Of Growing Currency Traders.
            </p>
          </div>


          {/* COMPETITIVE */}
      <div className="bg-black text-white p-14 animate-fadeIn  flex flex-col items-center justify-center text-center min-h-[320px] 
                group overflow-hidden relative tilt-card">
  {/* Image */}
  <img 
    src="http://nebulafinserv.com/assets/img/opportunity.png" 
    alt="Competitive" 
    className="w-50 h-50 mb-6 object-contain transform transition-transform duration-500"
  />
  <h3 className="text-3xl font-semibold tracking-widest mb-4 text-[#d2aa73] transform transition-transform duration-500">
    COMPETITIVE
  </h3>
  <p className="text-xl leading-relaxed max-w-md text-[#d2aa73] transform transition-transform duration-500">
    We Can Help You To Continue The Trade With The Global                   
    Currency Market, CFDs And Share So That You Can Make
    The Most From The Competitive Spreads.
  </p>
      </div>

        </div>

      </div>
    </section>
  );
};

export default OpportunitySection;
