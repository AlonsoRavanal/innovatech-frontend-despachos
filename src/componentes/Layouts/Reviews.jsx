function Reviews() {
  return (
    <div className="bg-white sm:py-10">
      <div className="mx-auto text-center">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Empresas que confían en nosotros
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Apple */}
          <div className="col-span-2 lg:col-span-1 flex justify-center">
            <svg width="158" height="48" viewBox="0 0 814 1000" fill="black" xmlns="http://www.w3.org/2000/svg" className="max-h-12 object-contain">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.5-57.9-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.1 269-317.1 71 0 130.5 46.4 174.9 46.4 42.7 0 109.2-49.9 189.4-49.9 30.8 0 130.5 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
          </div>

          {/* HyperX */}
          <div className="col-span-2 lg:col-span-1 flex justify-center">
            <svg width="158" height="48" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="max-h-12 object-contain">
              <rect width="200" height="60" fill="#E30613" rx="4"/>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" letterSpacing="2">HyperX</text>
            </svg>
          </div>

          {/* Logitech */}
          <div className="col-span-2 sm:col-start-2 lg:col-span-1 flex justify-center">
            <svg width="158" height="48" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="max-h-12 object-contain">
              <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#00B8F1" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" letterSpacing="1">Logitech</text>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Reviews;