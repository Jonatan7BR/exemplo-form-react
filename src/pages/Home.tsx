import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./Home.scss";
import { useEffect } from "react";
import { getPeople } from "../api/people";
import { MessageType, sendMessage } from "../redux/reducers/messageSlice";
import { cpfFormat } from "../utils/data-format";

const Home = () => {
  const peopleData = useAppSelector((state) => state.people.people);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToEditPage = (id: number) => {
    navigate(`/editar/${id}`);
  };

  const goToNewPage = () => {
    navigate("/novo");
  };

  useEffect(() => {
    dispatch(getPeople()).then((result) => {
      if (getPeople.rejected.match(result)) {
        dispatch(
          sendMessage({
            message: "Ocorreu um erro ao carregar os dados",
            messageType: MessageType.Error,
          }),
        );
      }
    });
  }, [dispatch]);

  return (
    <>
      <h1>Pessoas cadastradas</h1>

      <div className="create-new">
        <button type="button" onClick={() => goToNewPage()}>
          Criar novo cadastro
        </button>
      </div>

      <table className="peopletable">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Cidade</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {peopleData.map((person, i) => (
            <tr key={i}>
              <td>{cpfFormat(person.cpf)}</td>
              <td>{person.name}</td>
              <td>
                {person.city}, {person.state}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => goToEditPage(person.id)}
                ></button>
              </td>
            </tr>
          ))}

          {peopleData.length === 0 && (
            <tr>
              <td colSpan={4}>Não há pessoas cadastradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Home;
