import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../Api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head
          title="Estatísticas"
          description="Estatísticas sobre as postagens do usuário."
        />
        Estatisticas
      </div>
    );
  else return null;
};

export default UserStats;
