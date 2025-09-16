@echo off
REM COLOCAR USUARIO E SENHA DO BANCO A SER RESTAURADO
SET BD=bd_ficherio
SET PGUSER=postgres
SET PGPASSWORD=postgres
REM ALTERAR O DIRETÓRIO EM QUE SE ENCONTRA O ARQUIVO A SER RESTAURADO

chdir C:\Users\06375071771\Desktop\Backups

REM !!!ATENÇÃO: ANTES DE RESTAURAR TABELAS OU SCHEMAS, VERIFIQUE SE ESTES OBJETOS POSSUEM TABLESPACES.
REM CASO POSSUA, CRIE AS TABLESPACES.
REM !!!ATENÇÃO: MUDAR NOME DO ARQUIVO ANTES DE EFETUAR O BACKUP
 

REM - U usuario, -d Banco, -c apaga objetos antes de cria-los, -v imprime mensagens de acoes a serem executadas 
"C:\Users\06375071771\Desktop\postgresql-17.5-3-windows-x64-binaries\pgsql\bin\pg_restore.exe"  -h localhost -p 3432 -U postgres -d "%BD%" -Fc -v -a "C:\Users\06375071771\Desktop\.backup"

pause
rem (sair da tela depois do restore)
exit pg_restore.exe