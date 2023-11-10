function alert() {
    Swal.fire({
        title: "Você deseja salvar as alterações?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: `Não Salvar`,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Alterações salvas com sucesso!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Alterações não foram salvas!", "", "info");
        }
      });
}