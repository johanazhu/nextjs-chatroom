import Head from "./Head";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Head />
      <div className="light-mode dark-mode min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </div>
    </>
  );
};

export default Layout;
