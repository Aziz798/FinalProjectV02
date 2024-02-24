﻿// <auto-generated />
using System;
using FinalProjectV02.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FinalProjectV02.Server.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240223195730_Third")]
    partial class Third
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CompanyId"));

                    b.Property<string>("CompanyEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyLogo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CraeatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("CompanyId");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Message", b =>
                {
                    b.Property<int>("MessageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MessageId"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("MessageContent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProjectId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("UserMessageId")
                        .HasColumnType("int");

                    b.HasKey("MessageId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProjectId"));

                    b.Property<int?>("CompanyId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.Property<string>("ProjectDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<TimeSpan>("ProjectDuration")
                        .HasColumnType("time");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ProjectId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("OwnerId")
                        .IsUnique();

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoleId"));

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RoleId");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Status", b =>
                {
                    b.Property<int>("StatusId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StatusId"));

                    b.Property<string>("StatusName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StatusId");

                    b.ToTable("Statuses");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Tache", b =>
                {
                    b.Property<int>("TaskId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TaskId"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("ProjectId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("StatusId")
                        .HasColumnType("int");

                    b.Property<int>("TacheUserId")
                        .HasColumnType("int");

                    b.Property<string>("TaskDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("TaskId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("StatusId");

                    b.HasIndex("UserId");

                    b.ToTable("Taches");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<int>("CompanyId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPhoto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("RoleId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.UsersInProject", b =>
                {
                    b.Property<int>("UsersInProjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UsersInProjectId"));

                    b.Property<int>("ProjectId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("UserStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UsersInProjectUserId")
                        .HasColumnType("int");

                    b.HasKey("UsersInProjectId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("UsersInProjects");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Message", b =>
                {
                    b.HasOne("FinalProjectV02.Server.Models.Entities.Project", "Project")
                        .WithMany("Messages")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FinalProjectV02.Server.Models.Entities.User", "User")
                        .WithMany("Messages")
                        .HasForeignKey("UserId");

                    b.Navigation("Project");

                    b.Navigation("User");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Project", b =>
                {
                    b.HasOne("FinalProjectV02.Server.Models.Entities.Company", "Company")
                        .WithMany("Projects")
                        .HasForeignKey("CompanyId");

                    b.HasOne("FinalProjectV02.Server.Models.Entities.User", "Owner")
                        .WithOne("Projects")
                        .HasForeignKey("FinalProjectV02.Server.Models.Entities.Project", "OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Tache", b =>
                {
                    b.HasOne("FinalProjectV02.Server.Models.Entities.Project", "Project")
                        .WithMany("Taches")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FinalProjectV02.Server.Models.Entities.Status", "Status")
                        .WithMany("Taches")
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FinalProjectV02.Server.Models.Entities.User", "User")
                        .WithMany("Taches")
                        .HasForeignKey("UserId");

                    b.Navigation("Project");

                    b.Navigation("Status");

                    b.Navigation("User");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.User", b =>
                {
                    b.HasOne("FinalProjectV02.Server.Models.Entities.Company", "Company")
                        .WithMany("Users")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FinalProjectV02.Server.Models.Entities.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.UsersInProject", b =>
                {
                    b.HasOne("FinalProjectV02.Server.Models.Entities.Project", "Project")
                        .WithMany("UsersInProjects")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FinalProjectV02.Server.Models.Entities.User", "User")
                        .WithMany("UserInprojects")
                        .HasForeignKey("UserId");

                    b.Navigation("Project");

                    b.Navigation("User");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Company", b =>
                {
                    b.Navigation("Projects");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Project", b =>
                {
                    b.Navigation("Messages");

                    b.Navigation("Taches");

                    b.Navigation("UsersInProjects");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.Status", b =>
                {
                    b.Navigation("Taches");
                });

            modelBuilder.Entity("FinalProjectV02.Server.Models.Entities.User", b =>
                {
                    b.Navigation("Messages");

                    b.Navigation("Projects");

                    b.Navigation("Taches");

                    b.Navigation("UserInprojects");
                });
#pragma warning restore 612, 618
        }
    }
}
