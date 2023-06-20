import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import Text from './Text';
import Title from './Title';

interface ContainerProps {
  itemID: string;
  itemType: string;
}

const Container: React.FC<ContainerProps> = ({ itemID, itemType }) => {
  const [components, setComponents] = useState<React.ReactNode[]>(null);

  const createChildComponents = (items: Record<string, any>, itemID: string): React.ReactNode[] => {
    const childComponents: React.ReactNode[] = [];
    for (const key in items) {
      const props = {
        itemID: `${itemID}/${key}`,
        itemType: items[key].richText ? 'richtext' : 'text',
        data: items[key],
        isComponent: 'component',
      };
      const Component = items[key].type ? Title : Text;
      childComponents.push(<Component key={key} {...props} />);
    }
    return childComponents;
  };

  useEffect(() => {
    if (!itemID) return;
    fetchData(itemID).then((data) => {
      setComponents(createChildComponents(data[':items'], itemID));
    });
  }, [itemID]);

  return (
    <div itemScope itemID={itemID} itemType={itemType}>
      {components}
    </div>
  );
};

export default Container;
