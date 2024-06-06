<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="php.css">
    <title>Formulário</title>
</head>

<body class="elements">
    <header>
        <h1>Meu Formulário</h1>
    </header>
    <div class="container">
        <div class="msg" id="msg"></div>
        <?php
            if (!empty($_GET['msg'])) {
                echo htmlspecialchars($_GET['msg']);
            }
            ?>
        <form action="crud.php" method="post">
            <div class="form-group">
                <label for="nome">Digite seu Nome</label>
                <input type="text" id="nome" name="nome" required />
            </div>
            <div class="form-group">
                <label for="email">Digite seu Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <input class="submit-btn" type="submit" value="Salvar">
        </form>
    </div>

    <script>
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById('msg').style.display = 'block';
            document.getElementById('msg').textContent = 'Formulário enviado com sucesso!';
        });
    </script>
</body>

</html>
