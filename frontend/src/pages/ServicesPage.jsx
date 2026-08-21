          {/* LEFT: Form */}
        <section>
          <div className={s.headerRow}>
            <div>
              <p className={s.pageLabel}>Services</p>
              <h1 className={s.mainHeading}>
                Shape what customers can{" "}
                <span className={s.gradientText}>book.</span>
              </h1>
              <p className={s.subText}>
                Add each appointment type with a duration and price. Active
                services appear on your public booking page.
              </p>
            </div>
            <div className={s.illustrationContainer}>
              <img
                src={p6Image}
                alt="Illustration"
                className={s.illustrationImg}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className={s.formCard}>
            <h3 className={s.formTitle}>
              <Plus className={s.formTitleIcon} />
              {editingId ? "Edit service" : "Add new service"}
            </h3>
            <div className={s.formGrid}>
              <label className={s.inputLabel}>
                Service name
                <div className={s.inputWrapper}>
                  <Layers className={s.inputIcon} />
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={s.textInput}
                    placeholder="Consultation"
                  />
                </div>
              </label>

              <div className={s.durationPriceGrid}>
                <label className={s.inputLabel}>
                  Duration
                  <div className={s.inputWrapper}>
                    <Clock className={s.inputIcon} />
                    <select
                      name="duration"
                      value={form.duration}
                      onChange={handleChange}
                      className={s.selectInput}
                    >
                      {[15, 30, 45, 60, 90, 120].map((value) => (
                        <option key={value} value={value}>
                          {value} minutes
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                <label className={s.inputLabel}>
                  Price
                  <div className={s.inputWrapper}>
                    <IndianRupee className={s.inputIcon} />
                    <input
                      name="price"
                      type="number"
                      min="0"
                      value={form.price}
                      onChange={handleChange}
                      className={s.priceInput}
                    />
                  </div>
                </label>
              </div>

              <label className={s.inputLabel}>
                Description
                <div className={s.textareaWrapper}>
                  <FileText className={s.textareaIcon} />
                  <textarea
                    name="description"
                    rows={3}
                    value={form.description}
                    onChange={handleChange}
                    className={s.textareaInput}
                    placeholder="A short customer-facing description"
                  />
                </div>
              </label>

              <label className={s.inputLabel}>
                Service Icon
                <div className={s.iconGrid}>
                  {Object.keys(ICON_MAP).map((iconName) => (
                    <button
                      key={iconName}
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({ ...prev, icon: iconName }))
                      }
                      className={
                        form.icon === iconName
                          ? s.iconBtnActive
                          : s.iconBtnInactive
                      }
                    >
                      <img
                        src={ICON_MAP[iconName]}
                        alt="Service Icon"
                        className={s.iconImg}
                      />
                    </button>
                  ))}
                </div>
              </label>
            </div>

            <div className={s.formActions}>
              <button
                type="submit"
                disabled={loading}
                className={s.submitButton}
              >
                <Save className={s.submitIcon} />
                {loading
                  ? "Saving..."
                  : editingId
                    ? "Save changes"
                    : "Add service"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEditing}
                  className={s.cancelButton}
                >
                  <X className={s.cancelIcon} />
                  Cancel
                </button>
              )}
            </div>

            {message && <p className={s.message}>{message}</p>}
          </form>
        </section>




        {/* RIGHT: Service list */}
        <section className={s.rightSection}>
          <h2 className={s.rightTitle}>
            <Layers className={s.rightTitleIcon} />
            Your services
          </h2>
          <div className={s.serviceList}>
            {services.length === 0 && (
              <div className={s.emptyState}>
                <Layers className={s.emptyIcon} />
                <p className={s.emptyText}>No services yet.</p>
              </div>
            )}

            {services.map((service, idx) => (
              <article key={service._id} className={s.serviceCard}>
                <div className={s.serviceCardInner}>
                  <div className={s.serviceInfoRow}>
                    <div className={s.serviceIconContainer}>
                      <img
                        src={ICON_MAP[service.icon || "C1.png"]}
                        alt={service.name}
                        className={s.serviceIconImg}
                      />
                    </div>
                    <div className={s.serviceTextBlock}>
                      <h3 className={s.serviceName}>{service.name}</h3>
                      <p className={s.serviceDetail}>
                        {service.duration} min · ₹
                        {Number(service.price).toLocaleString()}
                      </p>
                      {service.description && (
                        <p className={s.serviceDesc}>{service.description}</p>
                      )}
                    </div>
                  </div>
                  <div className={s.serviceActions}>
                    <button
                      type="button"
                      onClick={() => toggleService(service)}
                      className={
                        service.isActive
                          ? s.visibilityBadgeActive
                          : s.visibilityBadgeInactive
                      }
                    >
                      {service.isActive ? (
                        <Eye className="h-3 w-3" />
                      ) : (
                        <EyeOff className="h-3 w-3" />
                      )}
                      {service.isActive ? "Active" : "Hidden"}
                    </button>
                    <button
                      type="button"
                      onClick={() => startEditing(service)}
                      className={s.editButton}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => confirmDelete(service)}
                      className={s.deleteButton}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Delete Service
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-slate-700">
                  {deleteConfirm.name}
                </span>
                ? Existing bookings will remain, but customers will no longer be
                able to book this service. This action cannot be undone.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirm(null)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={executeDelete}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Delete Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
