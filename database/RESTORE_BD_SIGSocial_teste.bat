@echo off
REM COLOCAR USUARIO E SENHA DO BANCO A SER RESTAURADO
SET BD=BD_Sigsocial
SET PGUSER=usr_desenv
SET PGPASSWORD=Marinha@2025
REM ALTERAR O DIRETÓRIO EM QUE SE ENCONTRA O ARQUIVO A SER RESTAURADO

chdir C:\Users\06375071771\Desktop\Backup SIGSoscial\Backups

REM !!!ATENÇÃO: ANTES DE RESTAURAR TABELAS OU SCHEMAS, VERIFIQUE SE ESTES OBJETOS POSSUEM TABLESPACES.
REM CASO POSSUA, CRIE AS TABLESPACES.
REM !!!ATENÇÃO: MUDAR NOME DO ARQUIVO ANTES DE EFETUAR O BACKUP
 

REM - U usuario, -d Banco, -c apaga objetos antes de cria-los, -v imprime mensagens de acoes a serem executadas 
"C:\Users\06375071771\Desktop\postgresql-17.5-3-windows-x64-binaries\pgsql\bin\pg_restore.exe"  -h 10.5.112.244 -p 32011 -U usr_desenv -d "%BD%" -Fc -v -a "C:\Users\06375071771\Desktop\Backup SIGSocial\Backup SISVoga BD_Sigsocial_08-08-2025.backup"

BD_Sigsocial

pause
rem (sair da tela depois do restore)
exit pg_restore.exe