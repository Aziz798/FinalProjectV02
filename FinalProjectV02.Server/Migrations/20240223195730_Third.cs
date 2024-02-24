using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProjectV02.Server.Migrations
{
    /// <inheritdoc />
    public partial class Third : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserRole",
                table: "Users",
                newName: "UserPhoto");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserPhoto",
                table: "Users",
                newName: "UserRole");
        }
    }
}
