import ChatGPT from './components/ChatGPT';
import PreviousChatsList from './components/PreviousChatsList';

const Home = () => {
  return (
    <body className="antialiased">
      <div className="relative z-0 flex h-full w-full overflow-hidden" >
        <aside className="dark flex-shrink-0 overflow-x-hidden bg-gray-900  w-64">
          <PreviousChatsList/>
        </aside>
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <ChatGPT />
        </div>
      </div>
    </body>
  );
};

export default Home;