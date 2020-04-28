
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/26/2020 12:42:27
-- Generated from EDMX file: C:\Users\Max\source\repos\youngbushfireheroes\youngbushfireheroes\Models\ybhModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [youngbushfireheroesDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'SpeciesSet'
CREATE TABLE [dbo].[SpeciesSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [name] nvarchar(max)  NOT NULL,
    [habitat] nvarchar(max)  NOT NULL,
    [food] nvarchar(max)  NOT NULL,
    [pic] nvarchar(max)  NOT NULL,
    [where] nvarchar(max)  NOT NULL,
    [endanger_status] nvarchar(max)  NOT NULL,
    [size] nvarchar(max)  NOT NULL,
    [type] nvarchar(max)  NOT NULL,
    [interest_fact] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'SpeciesSet'
ALTER TABLE [dbo].[SpeciesSet]
ADD CONSTRAINT [PK_SpeciesSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------