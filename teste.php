<?php

use App\Filtros\FiltroUsuarioLogado;
use App\Filtros\FiltroUsuarioAdmin;

return [
    'logado' = FiltroUsuarioLogado::class,
    'admin' = [FiltroUsvarioLogado::class, FiltroUsuarioAdmin::class]
];