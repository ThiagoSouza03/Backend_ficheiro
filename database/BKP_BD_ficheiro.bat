@echo off
rem (Nome do Usuário do banco para realizar o backup)
REM nome pasta de backup
REM nome pasta de instalação do PostgreSQL se diferente de C:\Arquivos de programas\PostgreSQL\8.4\
REM
REM (Nome do usuário do PostgreSQL que executará o script)
SET PGUSER=postgres
rem (Senha do usuário acima)
SET PGPASSWORD=postgres
rem (Nome do banco)
SET BD=bd_ficheiro
rem (Indo para a raiz do disco)
chdir C:\Users\06375071771\Desktop\Backup SIGSocial
rem (Selecionando a pasta onde será realizada o backup)
chdir C:\Users\06375071771\Desktop\Backup SIGSocial

echo "Aguarde, realizando o backup do Banco de Dados"
rem Observação: Caso queira colocar o nome do backup seguindo de uma data é só usar:
for /f "tokens=1,2,3,4 delims=/ " %%a in ('DATE /T') do set Date=%%a-%%b-%%c
rem O comando acima serve para armazenar a data no formato dia-mes-ano na variável Date;

C:\Users\06375071771\Desktop\postgresql-17.5-3-windows-x64-binaries\pgsql\bin\pg_dump.exe -h localhost -p 5432 -U postgres -Fc -b -v -f "C:\Users\06375071771\Desktop\Backup SIGSocial\Backup SISVoga %BD%_%Date%.backup" "%BD%"  

pause
      
rem (sair da tela depois do backup)
rem exit