import { Plus } from "../../icons/plus";

export function Card({ children, icon: Icon, title, subtitle, ...props }: CardProps) {
  return (
    <div
      className="group w-full h-full hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 shadow-md border border-purple-800/50 rounded-xl p-8 flex flex-col gap-4 items-center bg-gradient-to-br from-purple-900/80 to-gray-900/90 backdrop-blur-sm overflow-hidden"
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
      <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
        <Icon className="size-14 text-white" />
      </div>
      <div className="relative flex flex-col gap-2 items-center">
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        <p className="text-purple-200/70 mb-6 group-hover:text-purple-100/90 transition-colors text-center">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: typeof Plus;
  title: string;
  subtitle: string;
}
