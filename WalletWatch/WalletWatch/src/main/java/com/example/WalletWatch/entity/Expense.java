package com.example.WalletWatch.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    private Date date;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private ExpenseCategory category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String notes;
}
