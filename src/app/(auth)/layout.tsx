const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-stone-300 min-h-screen flex items-center justify-center">
            {children}
        </div>
    );
}

export default AuthLayout;
