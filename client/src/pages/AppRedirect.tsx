import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export default function AppRedirect() {
  const IOS_URL = "https://apps.apple.com/ae/app/greenline-power/id6752994442";
  const ANDROID_URL = "https://play.google.com/store/apps/details?id=ae.greenlinepg.cp";

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = IOS_URL;
      return;
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = ANDROID_URL;
      return;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center animate-pulse">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl font-bold font-display">Download Greenline App</h1>
        <p className="text-gray-400">Redirecting you to the app store...</p>

        <div className="space-y-4 pt-4">
          <a href={IOS_URL} className="block w-full">
            <Button className="w-full h-14 text-lg bg-white text-black hover:bg-gray-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-5 h-5 mr-3 invert" />
              App Store
            </Button>
          </a>
          
          <a href={ANDROID_URL} className="block w-full">
            <Button variant="outline" className="w-full h-14 text-lg border-white/20 hover:bg-white/10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-5 h-5 mr-3" />
              Google Play
            </Button>
          </a>
        </div>
        
        <p className="text-xs text-gray-500 pt-8">
          If you are not redirected automatically, please choose your store above.
        </p>
      </div>
    </div>
  );
}
