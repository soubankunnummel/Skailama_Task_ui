import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// import { getAllProjects } from "@/app/services/apis/userService";
import { gerAllProjects} from "@/app/services/apis/projectService";


export default function useFetchProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const Router = useRouter();
  const user = Cookies.get("token");

  useEffect(() => {
    if (user) {
        gerAllProjects()
        .then((res) => {
          setProjects(res.data);
          setLoading(false);
          if (res.data.length === 0) {
            Router.push("/");
            }
            else {
            Router.push("/projects");

          }
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user, Router]);
 

  const addProject = (newProject) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  return { projects, loading, addProject };
}
