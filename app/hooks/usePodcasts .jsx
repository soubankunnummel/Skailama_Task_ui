import { useEffect, useState } from 'react';
import { getProjectById } from "@/app/services/apis/projectService";

export const usePodcasts = (project) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!project) return;

    const fetchPodcasts = async () => {
      try {
        const res = await getProjectById(project);
        setPodcasts(res?.data?.podcast || []);
      } catch (error) {
        console.error('Failed to fetch podcasts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [project]);

  return { podcasts, loading, setPodcasts };
};
