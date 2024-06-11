import LoginForm from './LoginForm';

export default function Login() {

  return (
    <div className="grid min-h-screen grid-cols-12 bg-gray-950">
      <div className="flex items-center justify-center h-full col-span-8 predio-background">
        <span className="text-6xl font-bold text-gray-200 font-Montserrat animate-pulse">
          Condomi<span className="font-normal text-gray-700">Next</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center h-full col-span-4 gap-12 p-12 bg-gray-100">
        <div className="flex items-center w-full gap-8">
          <div className="w-full bg-gray-950 p-0.5 rounded-full"></div>
          <span className="text-5xl font-Montserrat">Login</span>
          <div className="w-full bg-gray-950 p-0.5 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center w-full gap-4 p-2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
