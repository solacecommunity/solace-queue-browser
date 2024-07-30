
import {
  GridviewReact,
  LayoutPriority,
  Orientation,
} from 'dockview';
import 'dockview/dist/styles/dockview.css';

export default function GridLayout({data, leftComponent, topComponent, bottomComponent}) {
  const components = {
    leftComponent,
    topComponent,
    bottomComponent
  };

  const onReady = (event) => {
    const panel1 = event.api.addPanel({
      id: "left-panel",
      component: "leftComponent",
      priority: LayoutPriority.High,
    });

    const panel2 = event.api.addPanel({
      id: "top-panel",
      component: "topComponent",
      position: { referencePanel: "left-panel", direction: "right" }
    });

    const panel3 = event.api.addPanel({
      id: "bottom-panel",
      component: "bottomComponent",
      position: { referencePanel: "top-panel", direction: "below" }
    });

    panel1.api.setSize({ width: (panel1.width + panel2.width) * 0.25 });
    panel3.api.setSize({ height: (panel2.height + panel3.height) * 0.25 });
  };

  return (
    <GridviewReact
      components={components}
      onReady={onReady}
      orientation={Orientation.VERTICAL}
      className={"dockview-theme-abyss"}
    />
  );
}