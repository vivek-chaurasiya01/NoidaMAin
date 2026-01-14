const AppLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        bg-[url('/bg-fixed.png')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      "
    >
      {/* OPTIONAL OVERLAY */}
      <div className="min-h-screen bg-black/60">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
