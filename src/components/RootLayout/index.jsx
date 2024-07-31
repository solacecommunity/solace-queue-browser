import TreeView from '../TreeView';
import MessageList from '../MessageList';
import MessageDetails from '../MessageDetails';

import Gridview from '../GridLayout';
import { SolaceQueueContextProvider } from '../../hooks/solace';

import './styles.css';

export default function RootLayout() {

  return (
    <div className="rootLayout">
      <SolaceQueueContextProvider>
        <main>
          <Gridview
            leftComponent={TreeView}
            topComponent={MessageList}
            bottomComponent={MessageDetails}
          />
        </main>
      </SolaceQueueContextProvider>
    </div>
  );
}

