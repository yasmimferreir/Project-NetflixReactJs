import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

const Sing = () => {
    const { sing } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");


    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const ress = sing(email, senha)
        if (ress) {
            setError(ress);
            return;
        }

        navigate("/home");
    };

    return (
        <C.Container>

            <C.Content>
                <C.Label>Entrar</C.Label>
                <Input
                    type="email"
                    placeholder="Email ou número de telefone"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Entrar" onClick={handleLogin} />


                <C.LabelSingup>
                    <Input
                        type="checkbox"
                    />

                    <C.Strong>
                        Lembrar de mim?
                    </C.Strong>
                </C.LabelSingup>

                <C.LabelSingup>
                    Conectar com o
                    <C.Strong>
                        <Link className="Link-two" to="">&nbsp;Facebook</Link>
                    </C.Strong>
                </C.LabelSingup>


                <C.LabelSingup>
                    Novo por aqui?
                    <C.Strong>
                        <Link to="/singUp">&nbsp;Assine agora</Link>
                    </C.Strong>
                </C.LabelSingup>

                <C.LabelSingup>
                    Esta página é protegida pelo Google reCAPTCHA para garantir que você nao é um robô.
                    <C.Strong>
                        <Link className="Link-two" to="">&nbsp;Saiba mais</Link>
                    </C.Strong>
                </C.LabelSingup>
            </C.Content>
            <C.footer>©2022 desenvolvedora Yasmim Ferreira Costa</C.footer>
        </C.Container>
    );
};

export default Sing;