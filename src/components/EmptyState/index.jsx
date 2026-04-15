import "./empty-state.style.css";

export function EmptyState() {
  return (
    <>
      <section className="empty-state">
        <p>Ainda não tem tarefas cadastras, adicione para começar</p>
        <img src="./empty.svg" alt="" />
      </section>
    </>
  );
}
