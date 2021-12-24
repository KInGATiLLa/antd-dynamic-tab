import {Tabs} from 'antd';

const {TabPane} = Tabs;

const DynamicTab = ({config, tabs}) => {
  const getTabTitle = ({tab, icon}) => {
    if (icon) {
      const Icon = icon;
      return (
        <span>
          <Icon />
          {tab}
        </span>
      );
    }
    return tab;
  };

  return (
    <Tabs {...config}>
      {tabs.map((baseTab, i) => {
        const {key, closeIcon, forceRender, tab, icon, content} = baseTab;
        const props = {key, closeIcon, forceRender};
        return (
          <TabPane tab={getTabTitle({tab, icon})} {...props}>
            {content}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default DynamicTab;
