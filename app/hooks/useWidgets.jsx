// hooks/useWidgets.js
import { useState, useEffect } from 'react';
import { getWidgets } from '@/app/services/apis/widgetService';

export const useWidgets = () => {
  const [widgetData, setWidgetData] = useState([]);

  useEffect(() => {
    getWidgets().then((res) => {
      setWidgetData(res.data);
    });
  }, []);

  return widgetData;
};
